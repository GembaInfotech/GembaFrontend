import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { parkingById } from "../../../SliceFolder/ParkingSlice/Parking";
import { useDispatch, useSelector } from 'react-redux';
import { fetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import ParkingPage from "../../../Components/VendorComponents/ParkingComponent/ParkingPage";


const AssociateParking = () => {

  const dispatch =useDispatch()
  const { parkingid } = useParams();
  const data = useSelector((state) => parkingById(state, parkingid));

  useEffect(() => {
    const id= "65e56461728ff51fd4874126"
    dispatch(fetchParkingsAsync({id}));
  }, [dispatch]);

  return (
    <div>
    {
      data &&
      <ParkingPage key={data._id} parking={data} edit={false} />
    }
  </div>
  );
};

export default AssociateParking;
