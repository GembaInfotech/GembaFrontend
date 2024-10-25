// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/v1/api/booking',
});

export const fetchBookings = async ({parkingid, status, page, limit}) => {
  console.log(parkingid);
  const response = await instance.get(`/get-booking-by-query/?parkingid=${parkingid}&status=${status}&page=${page}&limit=${limit}`);
  console.log(response.data);
  return response.data;
};

export const upcomingBookingIn15min = async ({parkingid}) => {
  console.log(parkingid);
  const response = await instance.get(`/get-incoming-booking-in-15min/${parkingid}`);
  console.log(response.data);
  return response.data;
};

export const updateBookingP = async (id) => {
  console.log(id);
  const response = await instance.put(`/exceed-time-and-exceed-price/${id}`);
  console.log(response);
  return response.data;
};

  export const updateBooking = async (id, status, tp, parkedAt, guardid, spaceId) => {
    const response = await instance.put(`/booking-status/${id}`, { status: status , tp, parkedAt, guardid, spaceId });
    return response.data;
  };
  

export const deleteBooking = async (id) => {
  await instance.delete(`/bookings/${id}`);
};
