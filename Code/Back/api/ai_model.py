import numpy as np
# from tensorflow.keras.models import load_model
import tensorflow as tf
from keras.models import load_model
from sklearn.metrics.pairwise import cosine_similarity
from .models import Agent
from .custom_layers import L2Normalization


# 加载模型和代理人向量
# model = load_model("model/towers1111_model.keras")
model = load_model("model/towers1111_model.keras", custom_objects={"L2Normalization": L2Normalization})
agent_vectors = np.load("model/agent_vectors.npy")

# 默认字段及权重组合（feature_weights_1）
FEATURES = [
    "Language", "Google_rating", "Success_rate", "Charge",
    "Visa_type", "Experience_years", "Booking_preference",
    "Location", "Availability", "Employment_type"
]
FEATURE_WEIGHTS = {
    "Language": 0.25,
    "Google_rating": 0.20,
    "Success_rate": 0.15,
    "Charge": 0.10,
    "Visa_type": 0.10,
    "Experience_years": 0.05,
    "Booking_preference": 0.05,
    "Location": 0.03,
    "Availability": 0.03,
    "Employment_type": 0.04
}

# 字符串字段编码为 one-hot/embedding 的预处理 placeholder（可自行替换）
def preprocess_user_input(input_dict):
    feature_vector = []
    for field in FEATURES:
        value = input_dict.get(field)
        # 示例：空值填0；字符串映射为哈希编码（简化示意）
        if value is None or value == "":
            feature_vector.append(0.0)
        elif isinstance(value, (int, float)):
            feature_vector.append(float(value))
        else:
            feature_vector.append(float(abs(hash(value)) % 1000) / 1000.0)
    return np.array([feature_vector])

def predict_agent(user_input: dict, top_k: int = 3):
    # 1. 预处理用户输入 → 转换为向量
    user_vector = preprocess_user_input(user_input)
    user_embedding = model.predict(user_vector)

    # 2. 相似度排序
    similarities = cosine_similarity(user_embedding, agent_vectors)[0]
    top_indices = similarities.argsort()[-top_k:][::-1]

    results = []

    for idx in top_indices:
        score = float(similarities[idx])

        try:
            agent = Agent.objects.get(id=idx + 1)


            agent_data = {
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
                "score": round(score, 4), 
            }

            results.append(agent_data)

        except Agent.DoesNotExist:
            continue

    return results