import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from '../../../Components/Tools/ActionButton';
import { fetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import ParkingCard from '../../../Components/VendorComponents/ParkingComponent/ParkingCard';
import { parkings } from '../../../SliceFolder/ParkingSlice/Parking';
import { Link } from 'react-router-dom';
function Parkings() {
  const dispatch = useDispatch();
  const data = useSelector(parkings);
  const status = useSelector((state) => state.Parking.status);
  useEffect(() => {
    if (!(status == "succeeded"))
      dispatch(fetchParkingsAsync());
  }, [dispatch]);

  console.log(data);

  return (
    <div className='p-2 max-sm:p-1'>
     <div className='flex justify-between items-center  bg-gray-300 rounded-sm'>
     <h1 className="font-light text-xl  p-1"> Results for Parking</h1>
      <Link to='/create'>
      <ActionButton name="Add" />
      </Link>
     </div>
      {data.parkings && data.parkings.map((item) => (
        <ParkingCard key={item._id} parking={item} />
      ))}
     
    </div>
  );
}

export default Parkings;
