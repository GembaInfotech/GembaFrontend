// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});

export const fetchGuards = async ({id}) => {
  const response = await instance.get(`/guard/${id}`);
  return response.data.data;
};

  export const updateGuard = async (id, GuardData) => {
 
    const response = await instance.put(`/guard/${id}`, { data: GuardData });
    localStorage.setItem('gaurdData', JSON.stringify(response.data)); // Store user data in local storage
    return response.data;
  };
