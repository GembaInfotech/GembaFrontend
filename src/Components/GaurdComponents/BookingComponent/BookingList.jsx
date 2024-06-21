import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";
import { fetchBookingsAsync } from '../../../SliceFolder/BookingSlice/Booking';
import BookingTable from './BookingTable';

const BookingList = ({ parkingid, status }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking);
  console.log(bookings);

  useEffect(() => {
    console.log("called")
    const waits = async() =>{
      console.log("ind")
      const fa=   ()=>{
        setTimeout(  () => {
           dispatch(fetchBookingsAsync({ parkingid: parkingid, status: status }));
           setLoading(false)

        }, 600);
      }
       fa();
 console.log("ot ")


   }

   waits()

  

  }, [dispatch, status]);

  return (
    loading ?
      <div className='flex justify-center items-center min-h-screen'>
        <PulseLoader color="#000" />
      </div>

      : <BookingTable status={status} booking={bookings.data} />
  );
};

export default BookingList;
