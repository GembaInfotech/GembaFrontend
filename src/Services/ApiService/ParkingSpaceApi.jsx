// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/v1/api/parkingSpace',
});

export const fetchParkingSpaceByCode = async (code) => {
  try {
    const response = await instance.get(`/getParkingSpace/${code}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching parking space');
  }
};
