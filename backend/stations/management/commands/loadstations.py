# backend/stations/management/commands/loadstations.py

import requests
from django.core.management.base import BaseCommand
from stations.models import Station


class Command(BaseCommand):
    help = 'Loads stations from the Radio-Browser API into the database'

    # The logic
    def handle(self, *args, **kwargs):
        self.stdout.write("Fetching stations from the Radio-Browser API...")

        api_url = "https://de1.api.radio-browser.info/json/stations/search?limit=5000&hidebroken=true&order=votes&reverse=true"

        try:
            response = requests.get(api_url)
            response.raise_for_status()
            stations_data = response.json()

            stations_created_count = 0

            # A list of codecs that work well with the standard HTML <audio> tag
            SUPPORTED_CODECS = ["MP3", "AAC", "AAC+", "OGG"]

            for station_info in stations_data:
                # *FILTERING *

                # Checks if the station has a supported codec.
                codec = station_info.get('codec', '').upper()
                if codec not in SUPPORTED_CODECS:
                    continue  # (Skip to the next station)

                # Gets the stream URL
                stream_url = station_info.get('url_resolved') or station_info.get('url')
                if not stream_url:
                    continue  # (Skip if no URL)

                # Checks for valid coordinates
                latitude = station_info.get('geo_lat')
                longitude = station_info.get('geo_long')
                if latitude is None or longitude is None:
                    continue  # (Skip if no coordinates)

                # * Create or Update the Station *
                station, created = Station.objects.update_or_create(
                    stream_url=stream_url,
                    defaults={
                        'name': station_info.get('name', 'Unknown Station').strip(),
                        'country': station_info.get('country', 'Unknown Country').strip(),
                        'latitude': latitude,
                        'longitude': longitude,
                    }
                )

                if created:
                    stations_created_count += 1

            self.stdout.write(self.style.SUCCESS(
                f"Successfully processed stations. Created {stations_created_count} new stations."
            ))

        except requests.exceptions.RequestException as e:
            self.stderr.write(self.style.ERROR(f"Error fetching data: {e}"))