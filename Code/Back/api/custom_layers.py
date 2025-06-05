# ai/custom_layers.py
import tensorflow as tf
from keras import Layer, saving

class L2Normalization(Layer):
    def call(self, inputs):
        return tf.math.l2_normalize(inputs, axis=-1)
