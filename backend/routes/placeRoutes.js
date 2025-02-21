const express = require('express');
const {
  addPlace,
  findNearbyPlaces,
  findNearestPlace,
  calculateDistance,
} = require('../controllers/placeController.js');

const router = express.Router();

router.post('/add', addPlace);
router.get('/nearby', findNearbyPlaces);
router.get('/nearest', findNearestPlace);
router.get('/distance', calculateDistance);

module.exports = router;
