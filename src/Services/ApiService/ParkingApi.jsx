// services/api.js
import axios from 'axios';
import getToken from '../../Hooks/getToken';
const instance = axios.create({
  baseURL: '/v1/api/parking',
});

export const fetchParkings = async () => {
  const token = await getToken();
  const response = await instance.get(`/get-vendor-parkings`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  console.log(response);
  return response.data.parkings;
};
export const guardfetchParkings = async ({id}) => {
  const response = await instance.get(`/parking/${id}`);
  console.log(response.data.data)
  return response.data.data;
};
export const fetchParkingById = async (id) => {
  const response = await instance.get(`/getParking/${id}`);
  console.log(response.data.data)
  return response.data.data;
};


export const fetchParkingSpaceByCode = async (code) => {
  const response = await instance.get(`/getParkingSpace/${code}`);
  console.log(response.data.data)
  return response.data.data;
};


export const fetchParkingByGuardId = async ({id}) => {
  console.log(id);
  const response = await instance.get(`/getguardParking/${id}`);
  console.log(response.data.parkings )
  return response.data.parkings;
};

export const createParking = async ({ ParkingData }) => {
  const token = await getToken();
  const response = await instance.post(`/create-new-parking`, { ParkingData }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  console.log(response.data);
  return response.data;
};


export const updateParking = async ({ id, updatedData }) => {
  const token = await getToken();
  const response = await instance.put(`/update-parking/${id}`, { updatedData }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};


export const deleteParking = async (id) => {
  await instance.delete(`/parking/${id}`);
};
