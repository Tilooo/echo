// frontend/src/App.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/Map.jsx';
import Player from './components/Player.jsx';
import LoadingIndicator from './components/LoadingIndicator.jsx'; // LoadingIndicator

function App() {
  const [stations, setStations] = useState([]);
  const [currentStation, setCurrentStation] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // The artificial delay for demonstration
    const timer = setTimeout(() => {
        axios.get('http://127.0.0.1:8000/api/stations/')
        .then(response => {
            setStations(response.data);
        })
        .catch(error => {
            console.error('Error fetching the stations!', error);
        })
        .finally(() => {
            setIsLoading(false); // Loading to false after fetch
        });
    }, 15); // 1.5 second delay to see the spinner

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleStationSelect = (station) => {
    setCurrentStation(station);
  };

  return (
    <div id="app-container" style={{ height: '100vh', width: '100vw' }}>
      {/* Map and Player */}
      <Map stations={stations} onStationSelect={handleStationSelect} />
      <Player station={currentStation} />

      {isLoading && <LoadingIndicator />}
    </div>
  );
}

export default App;