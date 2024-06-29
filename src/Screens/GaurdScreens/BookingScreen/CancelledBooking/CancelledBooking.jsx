
import React from 'react'
import BookingList from '../../../../Components/GaurdComponents/BookingComponent/BookingList'
import { useParams } from 'react-router-dom'

const CancelledBooking = () => {
  const {parkingid}= useParams()
  return (
<BookingList parkingid={parkingid} status="Cancelled"/>  )
}

export default CancelledBooking