// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchBookings = async ({status}) => {
  const response = await instance.get(`/bookings/bookings/?parkingId=65db201120e5cfa49800791e&status=${status}`);
  return response.data.data;
};

export const createBooking = async (bookingData) => {
  const response = await instance.post('/bookings/bookings', bookingData);
  return response.data;
};


  export const updateBooking = async (id, status) => {
    console.log(status)
    const response = await instance.put(`/bookings/update/${id}`, { Status: status });
    return response.data;
  };
  

export const deleteBooking = async (id) => {
  await instance.delete(`/bookings/${id}`);
};
