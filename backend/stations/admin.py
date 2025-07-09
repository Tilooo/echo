# backend/stations/admin.py

from django.contrib import admin
from .models import Station  # Station model from models.py

# Tells the admin site to manage the Station model
admin.site.register(Station)