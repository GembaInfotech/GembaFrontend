// components/BookingList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingsAsync } from '../../../SliceFolder/BookingSlice/Booking';
import BookingTable from './BookingTable';
// import { fetchBookingsCompleted, fetchBookingsParked } from '../../../Services/ApiService/BookingApi';

const BookingList = ({parkingid, status}) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000); 

     dispatch(fetchBookingsAsync({parkingid:parkingid,status:status}));
  }, [ dispatch]);

  return (
    <div>
      {
        loading ? <div className='bg-gray-100 rounded-md max-h-64 max-w-96 flex justify-center items-center'> <h2>Loading....</h2></div>: <BookingTable status={status} booking={bookings.data} />

      }
    </div>
  );
};

export default BookingList;
