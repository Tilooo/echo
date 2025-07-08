# backend/stations/views.py

from rest_framework import viewsets
from .models import Station
from .serializers import StationSerializer

class StationViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    It's read-only, so no create, update, or delete.
    """
    queryset = Station.objects.all()
    serializer_class = StationSerializer