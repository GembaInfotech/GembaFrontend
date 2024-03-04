// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchParkings = async () => {
  console.log("Ca;;ed");
  const response = await instance.get(`/vendor/getParking/65e56461728ff51fd4874126`);
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
