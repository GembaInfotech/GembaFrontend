import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parkingById } from '../../../SliceFolder/ParkingSlice/Parking';
import { useParams } from 'react-router';
import ParkingPage from '../../../Components/VendorComponents/ParkingComponent/ParkingPage';

function ParkingDetail() {

  const { id } = useParams();
  const data = useSelector((state) => parkingById(state, id));
  return (
    <div>
      {
        data &&
        <ParkingPage key={data._id} parking={data} />
      }
    </div>
  );
}

export default ParkingDetail;
