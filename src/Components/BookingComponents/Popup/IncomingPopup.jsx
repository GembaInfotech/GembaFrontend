
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookingAsync } from '../../../SliceFolder/BookingSlice/Booking';
function IncomingPopup({selectedBooking}) {
  const dispatch = useDispatch();
  const update=(id, status)=>{
    console.log("called")
    console.log(status)
    console.log(id)
      dispatch(updateBookingAsync({id,status}));
window.reload();
  }
  return (
<div>

<h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
<p className="text-gray-700">Car Number: {selectedBooking.CarNumber}</p>

  <p className="text-gray-700">Time In: {new Date(selectedBooking.timeIn).toLocaleString()}</p>
  <p className="text-gray-700">Time Out: {new Date(selectedBooking.timeOut).toLocaleString()}</p>
  <p className="text-gray-700">Booking Price: {selectedBooking.bookingPrice}</p>
  <p className="text-gray-700">Status: {selectedBooking.status}</p>
  <div className="flex mt-4">
      <button onClick={()=>update(selectedBooking._id, "Parked")} className="bg-green-500 text-white p-2 rounded-full mr-2 hover:bg-green-700">Confirm</button>
      
  </div>
</div>
  )
}

export default IncomingPopup