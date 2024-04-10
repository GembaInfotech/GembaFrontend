// services/api.js
import axios from 'axios';
import getToken from '../../Hooks/getToken';
const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchParkings = async () => {
  const token = await getToken();
  const response = await instance.get(`/vendor/getparking`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data.data;
};
export const guardfetchParkings = async ({id}) => {
  const response = await instance.get(`/parking/${id}`);
  console.log(response.data.data)
  return response.data.data;
};

export const createParking = async ({ ParkingData }) => {
  const token = await getToken();
  const response = await instance.post(`/parking/register`, { ParkingData }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};


export const updateParking = async ({ id, updatedData }) => {
  const response = await instance.put(`/parking/update/${id}`, { updatedData });
  return response.data;
};


export const deleteParking = async (id) => {
  await instance.delete(`/parking/${id}`);
};
