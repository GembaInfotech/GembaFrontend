import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parkingById } from '../../../SliceFolder/ParkingSlice/Parking';
import { useParams } from 'react-router';
import ParkingPage from '../../../Components/VendorComponents/ParkingComponent/ParkingPage';
import PulseLoader from "react-spinners/PulseLoader";

function ParkingDetail() {

  const { id } = useParams();
  console.log(id);
  const data = useSelector((state) => parkingById(state, id));
  console.log(data);

  return (
    <div>

      { !data &&<div><h1 className='text-red-500 p-4'>Some error Occured While Loading the Data... Kindly Refresh or Login Again...</h1></div> }
      
      { data && <ParkingPage key={data._id} parking={data} /> }
    </div>
  );
}

export default ParkingDetail;
