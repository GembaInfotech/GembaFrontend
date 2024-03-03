// components/BookingList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingsAsync } from '../../../SliceFolder/BookingSlice/Booking';
import BookingTable from './BookingTable';
// import { fetchBookingsCompleted, fetchBookingsParked } from '../../../Services/ApiService/BookingApi';

const BookingList = ({status}) => {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking);
  console.log(bookings)

  useEffect(() => {
   
    dispatch(fetchBookingsAsync({status:status}));
  }, [dispatch]);

  return (
    <div>
           <BookingTable status={status} booking={bookings.data} />
    </div>
  );
};

export default BookingList;
