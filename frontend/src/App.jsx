// frontend/src/App.jsx  (veiksmo smegenys)

import { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/Map.jsx';
import Player from './components/Player.jsx'; // Player component

function App() {
  const [stations, setStations] = useState([]);
  // The state variable to hold the currently selected station
  const [currentStation, setCurrentStation] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/stations/')
      .then(response => {
        setStations(response.data);
      })
      .catch(error => {
        console.error('Error fetching the stations!', error);
      });
  }, []);

  // A function that will be called by the Map component
  const handleStationSelect = (station) => {
    console.log("Selected station:", station);
    setCurrentStation(station); // Updates the state with the selected station
  };

  return (
    <div id="app-container" style={{ height: '100vh', width: '100vw' }}>
      {/* The select function down to the Map */}
      <Map stations={stations} onStationSelect={handleStationSelect} />
      {/* renders The Player and passes the current station down to it */}
      <Player station={currentStation} />
    </div>
  );
}

export default App;