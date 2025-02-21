const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const placeRoutes = require('./routes/placeRoutes.js');
const { createPlaceTable } = require('./models/Place.js'); // ✅ Correct Import

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

createPlaceTable(); // ✅ This should now work

app.use('/api/places', placeRoutes);
app.listen(5000, () => console.log('✅ Server running on port 5000'));
