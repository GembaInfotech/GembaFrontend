// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchGuards = async () => {
  const response = await instance.get(`/Guards/Guards/?parkingId=65db201120e5cfa49800791e&status=${status}`);
  return response.data.data;
};

  export const updateGuard = async (id, GuardData) => {
 
    const response = await instance.put(`/guard/${id}`, { data: GuardData });
console.log(response)
    localStorage.setItem('gaurdData', JSON.stringify(response.data)); // Store user data in local storage
    return response.data;
  };
