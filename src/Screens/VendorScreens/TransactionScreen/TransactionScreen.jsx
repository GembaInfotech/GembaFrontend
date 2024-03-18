import React, { useEffect, useState } from 'react';
import TransactionTable from '../../../Components/TransactionComponents/TransactionTable';
import { parkings } from '../../../SliceFolder/ParkingSlice/Parking';
import PulseLoader from "react-spinners/PulseLoader";
import { useDispatch, useSelector } from 'react-redux';
import { fetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { fetchBookingsAsync } from '../../../SliceFolder/BookingSlice/Booking';

function TransactionScreen() {
  const dispatch = useDispatch();
  const [value, setSelectedParking] = useState(null);
  const [loading, SetLoading] = useState(true)
  const data = useSelector(parkings);
  const bookings = useSelector((state) => state.booking.data)
  const status = useSelector((state) => state.booking.status);

  useEffect(() => {
    if ((status == "idle"))
      dispatch(fetchParkingsAsync());
    SetLoading(false)
  }, [dispatch]);


  const handleParkingChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedParking(selectedValue);
    const status = "Completed";
    const parkingid = selectedValue;
    dispatch(fetchBookingsAsync({ parkingid, status }))
  };


  return (
    <div className='px-2 py-2'>
      <h1 className="font-light text-xl mb-2 bg-gray-300 rounded-sm p-1"> Transactions</h1>
      {loading ?
        <div className='flex justify-center items-center min-h-screen'><PulseLoader color="#000" />
        </div> :
        <div>
          <div className=''> <label htmlFor="parkingDropdown">Select Parking:</label>
            <select id="parkingDropdown" onChange={handleParkingChange} value={value || ''} className='bg-gray-100 mx-1 p-2 border border-white rounded-md'>
              <option value="" disabled>Select a parking</option>
              {data?.data.parkings?.map((parking, index) => (
                <option key={index} value={parking._id}>
                  {parking.pn}
                </option>
              ))}
            </select>
          </div>
        </div>
      }
      {status == "loading" ? <div className='flex justify-center items-center h-[500px]'>       <PulseLoader color="#000" />
      </div> : <TransactionTable status={status} booking={bookings} />
      }

    </div>
  );
}

export default TransactionScreen;
