
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookingAsync } from '../../../../SliceFolder/BookingSlice/Booking';

function IncomingPopup({selectedBooking}) {
  const dispatch = useDispatch();
  const update=(id, status)=>{
   
      dispatch(updateBookingAsync({id,status}));
  }
  return (
<div>

<h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
<p className="text-gray-700">Car Number: {selectedBooking.num}</p>
  <p className="text-gray-700">Time In: {new Date(selectedBooking.In).toLocaleString()}</p>
  <p className="text-gray-700">Time Out: {new Date(selectedBooking.out).toLocaleString()}</p>
  <p className="text-gray-700">Booking Price: {selectedBooking.price+2*selectedBooking.sgst}</p>
  <p className="text-gray-700">Status: {selectedBooking.status}</p>
  <div className="flex mt-4">
      <button onClick={()=>update(selectedBooking._id, "Parked")} className="bg-green-500 text-white p-2 rounded-md mr-2 hover:bg-green-700">Confirm</button>
      
  </div>
</div>
  )
}

export default IncomingPopup