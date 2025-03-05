function Weather() {
  // Implement weather search functionality here
  return <h1>Weather Search</h1>;
}

// src/pages/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';

function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}

export default Map;