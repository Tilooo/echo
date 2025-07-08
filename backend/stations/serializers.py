# backend/stations/serializers.py

from rest_framework import serializers
from .models import Station

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        # The fields that will be included in the JSON output
        fields = ['id', 'name', 'country', 'stream_url', 'latitude', 'longitude']