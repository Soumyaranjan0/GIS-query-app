const pool = require('../config/db.js');

const createPlaceTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS places (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        latitude DOUBLE PRECISION NOT NULL,
        longitude DOUBLE PRECISION NOT NULL,
        geom GEOMETRY(Point, 4326)
      );
    `);
    console.log('Table "places" created or already exists.');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

module.exports = { createPlaceTable };
