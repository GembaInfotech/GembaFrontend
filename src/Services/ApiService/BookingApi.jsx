// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchBookings = async ({parkingid, status}) => {
  const response = await instance.get(`/booking/?parkingid=${parkingid}&status=${status}`);
  console.log(response.data.data);
  console.log(status);
  return response.data.data;
};

// export const fetchBookingsParked = async ({status}) => {
//   const response = await instance.get(`/booking/?parkingId=65e175e107cb14328aec98cb&status=${status}`);
//   return response.data.data;
// };
// export const fetchBookingsCompleted = async ({status}) => {
//   const response = await instance.get(`/booking/?parkingId=65e175e107cb14328aec98cb&status=${status}`);
//   return response.data.data;
// };

  export const updateBooking = async (id, status, tp) => {
    console.log(status, tp)
    const response = await instance.put(`/booking/status/${id}`, { status: status , tp });
    return response.data;
  };
  

export const deleteBooking = async (id) => {
  await instance.delete(`/bookings/${id}`);
};
