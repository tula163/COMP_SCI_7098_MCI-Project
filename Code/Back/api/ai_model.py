import numpy as np
import tensorflow as tf
from keras.models import load_model
from sklearn.metrics.pairwise import cosine_similarity
from .models import Agent
from .custom_layers import L2Normalization

# Load the model and the agent vector
model = load_model("model/towers1111_model.keras", custom_objects={"L2Normalization": L2Normalization})
agent_vectors = np.load("model/agent_vectors.npy")

# All characteristic fields (fixed order)
FEATURES = [
    "Language", "Google_rating", "Success_rate", "Charge",
    "Visa_type", "Experience_years", "Booking_preference",
    "Location", "Availability", "Employment_type"
]

# Dynamic weight generation
def get_dynamic_weights(user_input: dict) -> dict:
    filled_fields = [f for f in FEATURES if user_input.get(f) not in [None, ""]]
    total = len(filled_fields)
    if total == 0:
        return {f: 0.0 for f in FEATURES}
    weight_per_field = 1.0 / total
    return {f: (weight_per_field if f in filled_fields else 0.0) for f in FEATURES}

# Feature preprocessing
def preprocess_user_input(input_dict: dict, weights: dict):
    feature_vector = []
    for field in FEATURES:
        value = input_dict.get(field)
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

def is_match(user_input: dict, agent: Agent) -> bool:
    exp_range = user_input.get("Experience_years", "")
    try:
        if exp_range == "0 ~ 10 years":
            return 0 <= agent.experience_years <= 10
        elif exp_range == "11 ~ 20 years":
            return 11 <= agent.experience_years <= 20
        elif exp_range == "21 ~ 30 years":
            return 21 <= agent.experience_years <= 30
        elif exp_range == "More than 30 years":
            return agent.experience_years > 30
    except Exception:
        return True
    return True  # Default true


# main function
def predict_agent(user_input: dict, top_k: int = 3):
    weights = get_dynamic_weights(user_input)
    user_vector = preprocess_user_input(user_input, weights)
    user_embedding = model.predict(user_vector)
    similarities = cosine_similarity(user_embedding, agent_vectors)[0]
    top_indices = similarities.argsort()[::-1]

    results = []
    for idx in top_indices:
        try:
            agent = Agent.objects.get(id=idx + 1)

            if not is_match(user_input, agent):  # add filter logic
                continue

            results.append({
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

            if len(results) == top_k:
                break

        except Agent.DoesNotExist:
            continue

    return results
