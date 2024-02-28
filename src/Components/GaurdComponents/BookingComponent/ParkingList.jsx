// components/ParkingList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import ParkingTable from './ParkingTable';

const ParkingList = () => {
  const dispatch = useDispatch();
  const Parkings = useSelector(state => state.Parking);

  useEffect(() => {
    dispatch(fetchParkingsAsync());
  }, [dispatch]);

  return (
    <div>
           <ParkingTable Parking={Parkings.data} />
    </div>
  );
};

export default ParkingList;
