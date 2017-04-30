from django.db import models
from django.utils import timezone

# Create your models here.
class Prediction(models.Model):
    date = models.DateTimeField(auto_now=True)
    current_power = models.IntegerField()

class Resource(models.Model):
    amount = models.IntegerField()
