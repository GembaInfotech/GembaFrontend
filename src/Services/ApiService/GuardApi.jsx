// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchGuards = async ({id}) => {
  const response = await instance.get(`/guard/${id}`);
  return response.data.data;
};

  export const updateGuard = async (id, GuardData) => {
    console.log(GuardData, "testing..1");
    const response = await instance.put(`/guard/${id}`, { data: GuardData });
    console.log(response);
    localStorage.setItem('gaurdData', JSON.stringify(response.data)); // Store user data in local storage
    return response.data;
  };
