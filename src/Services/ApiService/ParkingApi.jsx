// services/api.js
import axios from 'axios';
import getToken from '../../Hooks/getToken';
const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchParkings = async ({id}) => {
  console.log("called")
  const response = await instance.get(`/vendor/getParking/${id}`);
  return response.data.data;
};

export const createParking = async ({ParkingData}) => {
  console.log(ParkingData)
  const token = await  getToken();
  const response = await instance.post(`/parking/register`, {ParkingData}, {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  });
  console.log(response);
  return response.data;
};


  export const updateParking = async ({id, updatedData}) => {
    console.log(updatedData)
    const response = await instance.put(`/parking/update/${id}`, { updatedData });
    console.log(response);
    return response.data;
  };
  

export const deleteParking = async (id) => {
  await instance.delete(`/parking/${id}`);
};
