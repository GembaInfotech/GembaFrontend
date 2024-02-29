// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchParkings = async () => {
  const response = await instance.get(`/parking/65db201120e5cfa49800791e`);
  return response.data.data;
};

export const createParking = async (ParkingData) => {
  const response = await instance.post('/Parkings/Parkings', ParkingDataz);
  return response.data;
};


  export const updateParking = async (id, status) => {
    console.log(status)
    const response = await instance.put(`/Parkings/update/${id}`, { Status: status });
    return response.data;
  };
  

export const deleteParking = async (id) => {
  await instance.delete(`/Parkings/${id}`);
};
