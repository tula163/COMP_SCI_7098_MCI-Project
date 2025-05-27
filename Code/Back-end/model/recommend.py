import sys
import json
import numpy as np
import pandas as pd
import os

from model import load_recommendation_model
import recommender

input_fields = [
    'Experience_years', 'Success rate', 'Language', 'Booking preference',
    'Charge', 'Visa type', 'Location', 'Employment Type',
    'Google rating', 'Availability'
]

def preprocess_input(user_input_dict):
    def preprocess(val):
        try:
            return float(val.replace("%", "").replace("AUD", "").strip())
        except:
            return hash(str(val)) % 1000 / 1000
    return np.array([[preprocess(user_input_dict[field]) for field in input_fields]])

if __name__ == "__main__":
    try:
        user_input = json.loads(sys.argv[1])
        model = load_recommendation_model()
        user_vector = preprocess_input(user_input)
        embedding = model.predict(user_vector)

        agent_df = pd.read_csv(os.path.join(os.path.dirname(__file__), "requirements_data_5.6.csv"))

        top_matches = recommender.recommend_with_weighted_match(
            user_input_dict=user_input,
            top_k=3,
            agent_df=agent_df,
            label_encoders={},
            feature_weights={
                "Experience_years": 0.1,
                "Success rate": 0.2,
                "Language": 0.1,
                "Booking preference": 0.1,
                "Charge": 0.1,
                "Visa type": 0.1,
                "Location": 0.1,
                "Employment Type": 0.1,
                "Google rating": 0.05,
                "Availability": 0.05,
            }
        )

        print(json.dumps(top_matches))

    except Exception as e:
        import traceback
        print("Traceback (Python error):", file=sys.stderr)
        traceback.print_exc(file=sys.stderr)
        sys.exit(1)
