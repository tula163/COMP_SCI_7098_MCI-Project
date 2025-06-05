from django.db import models

# Create your models here.
from django.db import models

class Agent(models.Model):
    marn = models.CharField(max_length=20)
    full_name = models.CharField(max_length=100)
    experience_years = models.IntegerField()
    charge = models.CharField(max_length=50)
    visa_type = models.CharField(max_length=100)
    booking_preference = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    success_rate = models.CharField(max_length=20)
    language = models.CharField(max_length=100)
    employment_type = models.CharField(max_length=50)
    google_rating = models.FloatField()
    availability = models.CharField(max_length=100)
    website = models.URLField()

    def __str__(self):
        return self.full_name


class RecommendationRecord(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    input_data = models.JSONField()
    result = models.JSONField()

    def __str__(self):
        return f"history {self.id} - {self.timestamp.strftime('%Y-%m-%d %H:%M:%S')}"
