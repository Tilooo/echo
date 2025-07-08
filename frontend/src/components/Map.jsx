// frontend/src/components/Map.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Re-import to ensure it's bundled if needed

const Map = () => {
  // Default map position (e.g., center of Europe)
  const position = [51.505, -0.09];

  return (
    <MapContainer center={position} zoom={5} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* This is just an example marker to show it works */}
      <Marker position={position}>
        <Popup>
          London. <br /> A test marker.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;