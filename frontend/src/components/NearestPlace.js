import React, { useState } from 'react';
import { getNearestPlace } from '../api/api';

const NearestPlace = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [nearest, setNearest] = useState(null);

  const handleSearch = async () => {
    const response = await getNearestPlace({ latitude, longitude });
    setNearest(response.data);
  };

  return (
    <div>
      <h2>Find Nearest Place</h2>
      <input type="number" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
      <input type="number" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
      <button onClick={handleSearch}>Find Nearest</button>

      {nearest && <p>Nearest Place: {nearest.name} ({nearest.type})</p>}
    </div>
  );
};

export default NearestPlace;
