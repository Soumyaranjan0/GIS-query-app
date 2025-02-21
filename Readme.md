# GIS Query and Map Handling App

This project is a location-based service using **MERN Stack** with **PostGIS (PostgreSQL)** for spatial queries. It allows users to store locations, find nearby places, determine the nearest location, and calculate distances between two points.

## 🚀 Features
- **Store Locations**: Save places with name, type, latitude, and longitude.
- **Find Nearby Locations**: Fetch all locations within a given radius.
- **Find Nearest Location**: Retrieve the closest place to a given point.
- **Distance Calculation**: Compute the distance between two selected locations.
- **Interactive Map**: Uses OpenLayers to visualize locations and interactions.

---

## 🛠️ Tech Stack
**Frontend:** React, OpenLayers

**Backend:** Node.js, Express, PostgreSQL (PostGIS)

**Database:** PostgreSQL with PostGIS extension

---

## 📂 Project Structure
```
/gis-query-app
│── /backend
│   │── /config          # Database configuration
│   │── /controllers     # API controllers
│   │── /models          # Database models
│   │── /routes          # API routes
│   │── index.js         # Server entry point
│── /frontend
│   │── /components      # React components
│   │── /pages           # Pages with OpenLayers map
│   │── App.js           # Main app file
│   │── index.js         # React entry point
│── .gitignore           # Ignoring unnecessary files
│── README.md            # Project documentation
```

---

## 🔧 Installation & Setup
### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/gis-query-app.git
cd gis-query-app
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

- **Configure Database** in `.env` (inside `backend` folder):
  ```env
  DB_USER=postgres
  DB_HOST=localhost
  DB_NAME=gisdb
  DB_PASSWORD=yourpassword
  DB_PORT=5432
  ```

- **Start PostgreSQL and Create Database:**
  ```bash
  psql -U postgres -h localhost -p 5432
  CREATE DATABASE gisdb;
  ```
- **Run Backend**
  ```bash
  npm start
  ```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

The application should be running at:
- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000`

---

## 🎯 API Endpoints
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| `POST` | `/api/places/add` | Add a new place |
| `GET`  | `/api/places/nearby?latitude=..&longitude=..&radius=5000` | Get nearby places |
| `GET`  | `/api/places/nearest?latitude=..&longitude=..` | Get nearest place |
| `GET`  | `/api/places/distance?lat1=..&lon1=..&lat2=..&lon2=..` | Calculate distance |

---

## 🌍 Frontend Features (OpenLayers Map)
1. Click on the map to **add a location**.
2. Enter a radius to **find nearby locations**.
3. Click a point to **find the nearest place**.
4. Select two locations to **calculate the distance**.

---


---

## 📌 Future Improvements
✅ Improve UI/UX with better styling
✅ Optimize database queries for performance
✅ Add user authentication for secure access
✅ Implement additional GIS features


