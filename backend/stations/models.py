from django.db import models

class Station(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    stream_url = models.CharField(max_length=500, unique=True)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return f"{self.name} ({self.country})"
