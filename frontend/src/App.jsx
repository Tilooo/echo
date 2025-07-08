// frontend/src/App.jsx

import './App.css';
import Map from './components/Map.jsx';

function App() {
  return (
    // The style attribute
    <div id="app-container" style={{ height: '100vh', width: '100vw' }}>
      <Map />
    </div>
  );
}

export default App;