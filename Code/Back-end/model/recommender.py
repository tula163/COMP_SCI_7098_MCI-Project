import numpy as np

def recommend_with_weighted_match(user_input_dict, top_k, agent_df, label_encoders, feature_weights):
    # 对每个代理进行加权距离计算
    distances = []
    for idx, agent in agent_df.iterrows():
        score = 0
        for field, weight in feature_weights.items():
            try:
                score += weight * (1 - (user_input_dict.get(field, 0) == agent.get(field, 1)))
            except:
                continue
        distances.append((idx, score))

    # 排序并选出得分最低的前 top_k 个
    distances.sort(key=lambda x: x[1])
    top_agents = agent_df.iloc[[idx for idx, _ in distances[:top_k]]]

    result = []
    for _, row in top_agents.iterrows():
        result.append({
            "Full_name": row.get("Full_name", ""),
            "MARN": row.get("MARN", ""),
            "Matched Fields": [],
            "Match Score": 0.0
        })
    return result
