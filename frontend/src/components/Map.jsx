// frontend/src/components/Map.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// The component now accepts 'onStationSelect' as a prop
const Map = ({ stations, onStationSelect }) => {
  const position = [51.505, -0.09];

  return (
    <MapContainer center={position} zoom={5} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {stations.map(station => (
        <Marker
          key={station.id}
          position={[station.latitude, station.longitude]}
        >
          <Popup>
            <b>{station.name}</b><br />
            {station.country}<br />
            {/* a button that calls the onStationSelect function */}
            <button onClick={() => onStationSelect(station)}>
              Play
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;