import React, { useState } from 'react';
import { getNearbyPlaces } from '../api/api';

const NearbyPlaces = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [radius, setRadius] = useState('');
  const [places, setPlaces] = useState([]);

  const handleSearch = async () => {
    const response = await getNearbyPlaces({ latitude, longitude, radius });
    setPlaces(response.data);
  };

  return (
    <div>
      <h2>Find Nearby Places</h2>
      <input type="number" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
      <input type="number" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
      <input type="number" placeholder="Radius (km)" value={radius} onChange={(e) => setRadius(e.target.value)} required />
      <button onClick={handleSearch}>Search</button>
      
      <ul>
        {places.map((place) => (
          <li key={place.id}>{place.name} ({place.type})</li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyPlaces;
