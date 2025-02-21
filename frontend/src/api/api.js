import axios from 'axios';

const API_URL = 'http://localhost:5000/api/places';

export const addPlace = (data) => axios.post(`${API_URL}/add`, data);
export const getNearbyPlaces = (params) => axios.get(`${API_URL}/nearby`, { params });
export const getNearestPlace = (params) => axios.get(`${API_URL}/nearest`, { params });
export const calculateDistance = (params) => axios.get(`${API_URL}/distance`, { params });
