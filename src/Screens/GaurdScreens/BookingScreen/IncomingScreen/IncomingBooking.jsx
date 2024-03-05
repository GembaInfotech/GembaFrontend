import React from 'react'
import BookingList from '../../../../Components/GaurdComponents/BookingComponent/BookingList'
import { useParams } from 'react-router-dom';
const IncomingBooking = () => {
  const {parkingid}= useParams();
   
  return (
<BookingList parkingid={parkingid} status="Incoming"/>
    )
}

export default IncomingBooking