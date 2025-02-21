import React, { useState } from 'react';
import { calculateDistance } from '../api/api';

const DistanceCalculator = () => {
  const [lat1, setLat1] = useState('');
  const [lon1, setLon1] = useState('');
  const [lat2, setLat2] = useState('');
  const [lon2, setLon2] = useState('');
  const [distance, setDistance] = useState(null);

  const handleCalculate = async () => {
    const response = await calculateDistance({ lat1, lon1, lat2, lon2 });
    setDistance(response.data.distance);
  };

  return (
    <div>
      <h2>Calculate Distance</h2>
      <input type="number" placeholder="Latitude 1" value={lat1} onChange={(e) => setLat1(e.target.value)} required />
      <input type="number" placeholder="Longitude 1" value={lon1} onChange={(e) => setLon1(e.target.value)} required />
      <input type="number" placeholder="Latitude 2" value={lat2} onChange={(e) => setLat2(e.target.value)} required />
      <input type="number" placeholder="Longitude 2" value={lon2} onChange={(e) => setLon2(e.target.value)} required />
      <button onClick={handleCalculate}>Calculate</button>

      {distance && <p>Distance: {distance} meters</p>}
    </div>
  );
};

export default DistanceCalculator;
