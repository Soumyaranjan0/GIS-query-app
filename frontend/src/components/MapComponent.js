import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';

const MapComponent = () => {
  useEffect(() => {
    new Map({
      target: 'map',
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({ center: [0, 0], zoom: 2 }),
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
};

export default MapComponent;
