// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/v1/api/booking',
});

export const fetchBookings = async ({parkingid, status}) => {
  console.log(parkingid);
  const response = await instance.get(`/get-booking-by-query/?parkingid=${parkingid}&status=${status}`);
  console.log(response.data.bookings);
  return response.data.bookings;
};

  export const updateBooking = async (id, status, tp) => {
    const response = await instance.put(`/booking-status/${id}`, { status: status , tp });
    return response.data;
  };
  

export const deleteBooking = async (id) => {
  await instance.delete(`/bookings/${id}`);
};
