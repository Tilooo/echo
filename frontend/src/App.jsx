// frontend/src/App.jsx

import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Map from './components/Map.jsx';
import Player from './components/Player.jsx';
import LoadingIndicator from './components/LoadingIndicator.jsx';

function App() {
  const [allStations, setAllStations] = useState([]);
  const [currentStation, setCurrentStation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
        axios.get('http://127.0.0.1:8000/api/stations/')
        .then(response => {
            setAllStations(response.data);
        })
        .catch(error => {
            console.error('Error fetching the stations!', error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, 1500); // 1.5 second delay to see the spinner

    return () => clearTimeout(timer);
  }, []);

  const filteredStations = useMemo(() => {
    if (!searchTerm) {
      return allStations;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return allStations.filter(station =>
      station.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      station.country.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [allStations, searchTerm]);

  const handleStationSelect = (station) => {
    setCurrentStation(station);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div id="app-container" style={{ position: 'relative', height: '100vh', width: '100vw', zIndex: 0 }}>

      {/* Search Input Field */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-80" style={{ zIndex: 10000 }}>
        <input
          type="text"
          placeholder="Search station or country..."
          className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Map */}
      <Map stations={filteredStations} onStationSelect={handleStationSelect} />

      {/* Player */}
      <Player station={currentStation} />

      {/* Loading Indicator */}
      {isLoading && <LoadingIndicator />}
    </div>
  );
}

export default App;