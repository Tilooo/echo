// frontend/src/components/Map.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './CustomMarker.css'; // The CSS file

// a custom div icon
const createCustomIcon = () => {
  return L.divIcon({
    html: `<div class="custom-marker-icon"></div>`,
    className: 'custom-marker-container',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
};

// Map Component
const Map = ({ stations, onStationSelect }) => {
  const position = [51.505, -0.09];

  return (
    <MapContainer center={position} zoom={5} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'
      />
      {stations.map(station => (
        <Marker
          key={station.id}
          position={[station.latitude, station.longitude]}
          icon={createCustomIcon()}
        >
          <Popup>
            <div>
              <b>{station.name}</b><br />
              {station.country}<br />
              <button onClick={() => onStationSelect(station)}>
                Play
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

