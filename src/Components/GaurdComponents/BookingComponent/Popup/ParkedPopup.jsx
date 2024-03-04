import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateBookingAsync } from '../../../../SliceFolder/BookingSlice/Booking';
import { Link } from 'react-router-dom';
function ParkedPopup({selectedBooking}) {
    const dispatch = useDispatch();
    const update=(id, status)=>{
      console.log("called")
      console.log(status)
      console.log(id)
        dispatch(updateBookingAsync({id,status}));
    }
    const handleSearch = () => {
        // Trigger a fetch when the search button is clicked
        fetchGuardDetails(searchTerm);
        console.log('Search term:', searchTerm);
      };
      const calculateExceedTime = (checkoutTime) => {
        const currentTime = Date.now();
      
        if (!checkoutTime || isNaN(new Date(checkoutTime).getTime())) {
          // Handle invalid or missing checkoutTime
          console.error('Invalid checkoutTime:', checkoutTime);
          return { days: 0, hours: 0, minutes: 0 };
        }
        const exceedTimeInMillis = Math.max(0, currentTime - new Date(checkoutTime).getTime());
        const days = Math.floor(exceedTimeInMillis / (1000 * 60 * 60 * 24));
        const hours = Math.floor((exceedTimeInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((exceedTimeInMillis % (1000 * 60 * 60)) / (1000 * 60));
      
        return { days, hours, minutes };
      };
    
      const handleClickOutside = (event) => {
        if (selectedBooking && event.target.closest('.bg-white') === null) {
          closePopup();
        }
      };
  return (
<div>
<h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
<p className="text-gray-700">Car Number: {selectedBooking.num}</p>
  <p className="text-gray-700">Time In: {new Date(selectedBooking.In).toLocaleString()}</p>
  <p className="text-gray-700">Time Out: {new Date(selectedBooking.out).toLocaleString()}</p>
  <p className="text-gray-700">Status: {selectedBooking.status}</p>
  <p className="text-gray-700">Booking Price: {selectedBooking.price}</p>

  {/* Exceed Time calculation */}
  <p className="text-gray-700">
    Exceed Time:
    {calculateExceedTime(selectedBooking.out).days > 0 && (
      <span>{calculateExceedTime(selectedBooking.out).days} days </span>
    )}
    {calculateExceedTime(selectedBooking.out).hours > 0 && (
      <span>{calculateExceedTime(selectedBooking.out).hours} hours </span>
    )}
    {calculateExceedTime(selectedBooking.out).minutes > 0 && (
      <span>{calculateExceedTime(selectedBooking.out).minutes} minutes</span>
    )}
    {calculateExceedTime(selectedBooking.out).minutes > 8 && (
      <span className="text-red-500"> (₹5)</span>
    )}
  </p>

  <div className="flex mt-4">
    <Link
      to={{
        pathname: `/generatee/${encodeURIComponent(JSON.stringify(selectedBooking))}`,
        state: { selectedBooking },
      }}
    >
      <button onClick={()=>update(selectedBooking._id, "Completed")} className="bg-green-500 text-white p-2 rounded-full mr-2 hover:bg-green-700">Collect</button>
    </Link>
  </div>
  
</div>
  )
}

export default ParkedPopup