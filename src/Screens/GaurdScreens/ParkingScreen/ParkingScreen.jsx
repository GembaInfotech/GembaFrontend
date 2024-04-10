import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { parkingById } from "../../../SliceFolder/ParkingSlice/Parking";
import { useDispatch, useSelector } from 'react-redux';
import { guardfetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import ParkingPage from "../../../Components/VendorComponents/ParkingComponent/ParkingPage";


const AssociateParking = () => {

  const dispatch =useDispatch()
  const { parkingid } = useParams();
  const data = useSelector((state) => state?.Parking?.data);
  console.log(data);
  useEffect(() => {
    const id= parkingid
    dispatch(guardfetchParkingsAsync({id}));
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
