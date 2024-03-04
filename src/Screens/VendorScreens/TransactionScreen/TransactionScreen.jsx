import React, { useEffect, useState } from 'react';
import TransactionTable from '../../../Components/TransactionComponents/TransactionTable';
import {parkings} from '../../../SliceFolder/ParkingSlice/Parking';
import {useDispatch,useSelector } from 'react-redux';
import { fetchBookingsAsync } from '../../../SliceFolder/BookingSlice/Booking';


function TransactionScreen() {
    const dispatch = useDispatch();
  const [value, setSelectedParking] = useState(null);
  const [income , setIncome] = useState();

  const data = useSelector(parkings);
  const bookings = useSelector((state)=>state.booking.data)

  console.log(bookings);
  const handleParkingChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedParking(selectedValue);

const status = "Completed";
 const parkingid = selectedValue;
 dispatch(fetchBookingsAsync({parkingid, status}))


  };

 

  return (
    <div>
      <h1 className='p-1 text-xl font-light'>Transaction</h1>
        <div className='p-2'> <label htmlFor="parkingDropdown">Select Parking:</label>
      <select id="parkingDropdown" onChange={handleParkingChange} value={value || '' } className='bg-gray-100 mx-1 p-2 border border-white rounded-md'>
        <option value="" disabled>Select a parking</option>
        {data.parkings.map((parking, index) => (
          <option key={index} value={parking._id}>
            {parking.pn}
          </option>
        ))}
      </select></div>
      <TransactionTable status={status} booking={bookings}  />

    </div>
  );
}

export default TransactionScreen;
