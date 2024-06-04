import React from 'react'
import BookingList from '../../../../Components/GaurdComponents/BookingComponent/BookingList'
import { useParams } from 'react-router-dom'

const ParkedBooking = () => {
   const {parkingid}=useParams();
  return (
<BookingList parkingid={parkingid} status="Parked"/>
    )
}

export default ParkedBooking