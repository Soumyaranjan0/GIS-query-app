const pool = require('../config/db.js');

// Add Place
const addPlace = async (req, res) => {
  const { name, type, latitude, longitude } = req.body;
  await pool.query(
    `INSERT INTO places (name, type, latitude, longitude, geom) 
    VALUES ($1, $2, $3, $4, ST_SetSRID(ST_MakePoint($4, $3), 4326))`,
    [name, type, latitude, longitude]
  );
  res.json({ message: 'Place added successfully' });
};

// Find Nearby Places
const findNearbyPlaces = async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  const result = await pool.query(
    `SELECT id, name, type, latitude, longitude FROM places 
    WHERE ST_DWithin(geom, ST_SetSRID(ST_MakePoint($2, $1), 4326), $3)`,
    [latitude, longitude, radius * 1000]
  );
  res.json(result.rows);
};

// Find Nearest Place
const findNearestPlace = async (req, res) => {
  const { latitude, longitude } = req.query;
  const result = await pool.query(
    `SELECT id, name, type, latitude, longitude FROM places 
    ORDER BY geom <-> ST_SetSRID(ST_MakePoint($2, $1), 4326) LIMIT 1`,
    [latitude, longitude]
  );
  res.json(result.rows[0]);
};

// Calculate Distance
const calculateDistance = async (req, res) => {
  const { lat1, lon1, lat2, lon2 } = req.query;
  const result = await pool.query(
    `SELECT ST_Distance(
      ST_SetSRID(ST_MakePoint($2, $1), 4326),
      ST_SetSRID(ST_MakePoint($4, $3), 4326)
    ) AS distance`,
    [lat1, lon1, lat2, lon2]
  );
  res.json({ distance: result.rows[0].distance });
};

module.exports = {
  addPlace,
  findNearbyPlaces,
  findNearestPlace,
  calculateDistance,
};
