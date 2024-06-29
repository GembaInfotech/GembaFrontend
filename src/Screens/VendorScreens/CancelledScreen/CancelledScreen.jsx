import React, { useEffect, useState } from 'react';
import TransactionTable from '../../../Components/TransactionComponents/TransactionTable';
import { parkings } from '../../../SliceFolder/ParkingSlice/Parking';
import PulseLoader from "react-spinners/PulseLoader";
import { useDispatch, useSelector } from 'react-redux';
import { fetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { fetchBookingsAsync } from '../../../SliceFolder/BookingSlice/Booking';

function CancelledScreen() {
  const dispatch = useDispatch();
  const [value, setSelectedParking] = useState(null);
  const [loading, SetLoading] = useState(true)
  const data = useSelector(parkings);
  const bookings = useSelector((state) => state.booking.data)
  const status = useSelector((state) => state.booking.status);

  console.log(data);
  useEffect(() => {
    if ((status == "idle"))
      dispatch(fetchParkingsAsync());
    SetLoading(false)
  }, [dispatch]);


  const handleParkingChange = (event) => {
    const selectedValue = event.target.value;
    
    setSelectedParking(selectedValue);
    const status = "Cancelled";
    const parkingid = selectedValue;
    dispatch(fetchBookingsAsync({ parkingid, status }))
  };


  return (
    <div className='px-4 h-[100%] bg-slate-200'>
      <h1 className=" text-2xl mb-2 font-bold bg-gray-900 text-gray-100 p-2 text-center "> Transactions</h1>
      {loading ?
        <div className='flex justify-center items-center min-h-screen'><PulseLoader color="#000" />
        </div> :
        <div>
          <div className='px-6 py-2 font-bold text-lg'> <label htmlFor="parkingDropdown">Select Parking:</label>
            <select id="parkingDropdown" onChange={handleParkingChange} value={value || ''} className='bg-slate-200 mx-1 p-2 border border-white rounded-sm'>
              <option value="" disabled>Select a parking</option>
              {data?.data?.map((parking, index) => (
                <option key={index} value={parking._id}>
                  {parking.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      }
      {status == "loading" ? <div className='flex justify-center items-center h-[500px]'>       <PulseLoader color="#000" />
      </div> : <TransactionTable className='' status={status} booking={bookings} />
      }

    </div>
  );
}

export default CancelledScreen;
