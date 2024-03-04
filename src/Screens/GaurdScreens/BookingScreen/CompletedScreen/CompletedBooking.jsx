
import React from 'react'
import BookingList from '../../../../Components/GaurdComponents/BookingComponent/BookingList'
import { useParams } from 'react-router-dom'

const CompletedBooking = () => {
  const {parkingid}= useParams()
  return (
<BookingList parkingid={parkingid} status="Completed"/>  )
}

export default CompletedBooking