import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchParkingByIdAsync, parkingById } from '../../../SliceFolder/ParkingSlice/Parking';
import { useParams } from 'react-router';
import ParkingPage from '../../../Components/VendorComponents/ParkingComponent/ParkingPage';
import PulseLoader from "react-spinners/PulseLoader";
import { useDispatch } from 'react-redux';

function ParkingDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();
 

  
    useEffect(()=>{
       dispatch(fetchParkingByIdAsync(id));
       
      
    },[dispatch])
    const data = useSelector((state) => parkingById(state, id));

     
 console.log(data)
  return (
    <div>

      
      { data && <ParkingPage key={data._id} parking={data} /> }
    </div>
  );
}

export default ParkingDetail;
