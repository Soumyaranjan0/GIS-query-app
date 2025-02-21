import React from 'react';
import MapComponent from './components/MapComponent';
import AddLocation from './components/AddLocation';
import NearbyPlaces from './components/NearbyPlaces';
import NearestPlace from './components/NearestPlace';
import DistanceCalculator from './components/DistanceCalculator';

const App = () => (
  <div>
    <h1>GIS Query and Map Handling</h1>
    <MapComponent />
    <AddLocation />
    <NearbyPlaces />
    <NearestPlace />
    <DistanceCalculator />
  </div>
);

export default App;
