// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});

export const fetchBookings = async ({parkingid, status}) => {
  const response = await instance.get(`/booking/?parkingid=${parkingid}&status=${status}`);
  return response.data.data;
};

  export const updateBooking = async (id, status, tp) => {
    const response = await instance.put(`/booking/status/${id}`, { status: status , tp });
    return response.data;
  };
  

export const deleteBooking = async (id) => {
  await instance.delete(`/bookings/${id}`);
};
