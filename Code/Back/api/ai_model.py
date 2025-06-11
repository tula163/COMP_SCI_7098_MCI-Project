import numpy as np
import tensorflow as tf
from keras.models import load_model
from sklearn.metrics.pairwise import cosine_similarity
from .models import Agent
from .custom_layers import L2Normalization

# Load the model and the agent vector
model = load_model("model/towers1111_model.keras", custom_objects={"L2Normalization": L2Normalization})
agent_vectors = np.load("model/agent_vectors.npy")


FEATURES = [
    "language", "google_rating", "success_rate", "charge",
    "visa_type", "experience_years", "booking_preference",
    "location", "availability", "employment_type"
]


feature_weights = {
    "language": 0.25,
    "google_rating": 0.20,
    "success_rate": 0.15,
    "charge": 0.10,
    "visa_type": 0.10,
    "experience_years": 0.05,
    "booking_preference": 0.05,
    "location": 0.03,
    "availability": 0.03,
    "employment_type": 0.04
}

def get_dynamic_weights(user_input: dict) -> dict:

    norm_input = {k.lower(): v for k, v in user_input.items()}
    filled_fields = [f for f in FEATURES if norm_input.get(f) not in [None, ""]]
    N = len(filled_fields)

    if N == len(FEATURES):
        return feature_weights.copy()

    elif N > 0:
        weights = {}
        for f in FEATURES:
            if f in filled_fields:
                weights[f] = feature_weights[f] * (1 + 1.0 / N)
            else:
                weights[f] = 0.0
   
        total = sum(weights.values())
        if total > 0:
            weights = {k: v / total for k, v in weights.items()}
        return weights

    else:
        return {f: 0.0 for f in FEATURES}


def preprocess_user_input(input_dict: dict, weights: dict):
    norm_input = {k.lower(): v for k, v in input_dict.items()}
    feature_vector = []
    for field in FEATURES:
        value = norm_input.get(field)
        raw_value = 0.0
        if value is None or value == "":
            raw_value = 0.0
        elif isinstance(value, (int, float)):
            raw_value = float(value)
        else:
            raw_value = float(abs(hash(value)) % 1000) / 1000.0
        weighted_value = raw_value * weights[field]
        feature_vector.append(weighted_value)
    return np.array([feature_vector])


def predict_agent(user_input: dict, top_k: int = 3):
    weights = get_dynamic_weights(user_input)
    user_vector = preprocess_user_input(user_input, weights)
    user_embedding = model.predict(user_vector)
    similarities = cosine_similarity(user_embedding, agent_vectors)[0]
    top_indices = similarities.argsort()[::-1]

   
    candidates = []
    for idx in top_indices:
        try:
            agent = Agent.objects.get(id=idx + 1)
           
            exp_range = user_input.get("experience_years", "")
            if exp_range:
                exp_val = agent.experience_years
                if exp_range == "0 ~ 10 years" and not (0 <= exp_val <= 10):
                    continue
                elif exp_range == "11 ~ 20 years" and not (11 <= exp_val <= 20):
                    continue
                elif exp_range == "21 ~ 30 years" and not (21 <= exp_val <= 30):
                    continue
                elif exp_range == "More than 30 years" and not (exp_val > 30):
                    continue

            candidates.append({
                "marn": agent.marn,
                "funame": agent.full_name,
                "location": agent.location,
                "experience_years": agent.experience_years,
                "charge": agent.charge,
                "visa_type": agent.visa_type,
                "booking_preference": agent.booking_preference,
                "success_rate": agent.success_rate,
                "language": agent.language,
                "employment_type": agent.employment_type,
                "google_rating": agent.google_rating,
                "availability": agent.availability,
                "website": agent.website,
                "score": round(float(similarities[idx]), 4),
            })

            if len(candidates) == top_k:
                break

        except Agent.DoesNotExist:
            continue

    return candidates
