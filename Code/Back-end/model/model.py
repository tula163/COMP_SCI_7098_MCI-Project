import os
import tensorflow as tf
from keras import layers, saving
from keras.models import load_model

@saving.register_keras_serializable()
class L2Normalization(layers.Layer):
    def call(self, inputs):
        return tf.math.l2_normalize(inputs, axis=1)

def get_model_path():
    return os.path.join(os.path.dirname(__file__), "towers_model.keras")

def load_recommendation_model():
    return load_model(get_model_path(), compile=False, custom_objects={"L2Normalization": L2Normalization})
