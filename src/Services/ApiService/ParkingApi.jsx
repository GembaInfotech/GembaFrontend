// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});

export const fetchParkings = async ({id}) => {
  console.log("called")
  const response = await instance.get(`/vendor/getParking/${id}`);
  return response.data.data;
};

export const createParking = async ({ParkingData, vendorId}) => {
  console.log(ParkingData)
  const response = await instance.post(`/parking/register/${vendorId}`, {ParkingData});
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
  await instance.delete(`/Parkings/${id}`);
};
