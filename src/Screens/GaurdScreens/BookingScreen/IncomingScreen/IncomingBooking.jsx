import React from 'react'
import BookingList from '../../../../Components/GaurdComponents/BookingComponent/BookingList'
import { useParams } from 'react-router-dom';
const IncomingBooking = () => {
  const {parkingid}= useParams();
  console.log(parkingid);
   
  return (
<BookingList parkingid={parkingid} status="Confirmed"/>
    )
}

export default IncomingBooking