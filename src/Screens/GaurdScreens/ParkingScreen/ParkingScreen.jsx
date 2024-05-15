import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { parkingById } from "../../../SliceFolder/ParkingSlice/Parking";
import { useDispatch, useSelector } from 'react-redux';
import { guardfetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
// import ParkingPage from "../../../Components/VendorComponents/ParkingComponent/ParkingPage";
// import ParkingPageForGuard from "../../../Screens/GaurdScreens/ParkingScreen/ParkingPageForGuard"
import ParkingPageForGuard from "./ParkingPageForGuard";


import { fetchParkingByGuardIdAsync } from "../../../SliceFolder/ParkingSlice/Parking";


const AssociateParking = () => {
  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));
  const guardid = storedUserData?.guard?._id;

  const dispatch =useDispatch()
  // const { parkingid } = useParams();
  const data = useSelector((state) => state?.Parking);
  console.log(data);
  
  // useEffect(() => {
  //   // const id= parkingid
  //   // console.log(parkingid);
  //   const fetch
  //   dispatch(fetchParkingByGuardIdAsync({id:guardid}));
  // }, [dispatch]);


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchParkingByGuardIdAsync({id:guardid}))
      // setLoading(false);
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>
      {/* parking */}
    {
      data?.data &&
      <ParkingPageForGuard key={data?.data?._id} parking={data?.data} edit={false} />
    }
  </div>
  );
};

export default AssociateParking;