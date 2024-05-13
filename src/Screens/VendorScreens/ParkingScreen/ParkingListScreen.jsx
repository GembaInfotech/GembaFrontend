import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from '../../../Components/Tools/ActionButton';
import PulseLoader from "react-spinners/PulseLoader";
import { fetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import ParkingCard from '../../../Components/VendorComponents/ParkingComponent/ParkingCard';
import { parkings } from '../../../SliceFolder/ParkingSlice/Parking';
import { Link } from 'react-router-dom';

function Parkings() {
  const dispatch = useDispatch();
  const parking = useSelector(parkings);
  console.log(parking);

  useEffect(() => {
    if ((parking.status == "idle")) dispatch(fetchParkingsAsync());
  }, [dispatch]);

  return (
    <div>
      {parking.status == "loading" && <div className='flex justify-center items-center min-h-screen'><PulseLoader color="#000" /></div>}
     
      {parking.status == "failed" && <div><h1 className='text-red-500 p-4'>Some error Occured While Loading the Data... Kindly Refresh or Login Again...</h1></div>}
     
      {parking.status == "succeeded" && !parking.error  && <div className='p-2 max-sm:p-1'>

        <div className='flex justify-between items-center  bg-gray-300 rounded-sm'>
          <h1 className="font-light text-xl  p-1"> Results for Parking</h1>
             <Link to='/create'>
               <ActionButton name="Add" />
             </Link>
        </div>

        {parking.data && parking.data.map((item) => ( <ParkingCard key={item._id} parking={item} />))}
      </div>
      }
    </div>
  );
}
export default Parkings;
