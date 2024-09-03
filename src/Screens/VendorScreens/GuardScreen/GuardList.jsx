import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGuardsbyParkingIdAsync } from "../../../SliceFolder/GuardSlice/guard";
import { FaEye } from "react-icons/fa";

function GuardList() {
  const { id } = useParams();
  const guards = useSelector((state) => state?.Guard?.data);
  console.log(guards);

  const dispatch = useDispatch();
  console.log(id);
  useEffect(() => {
    dispatch(fetchGuardsbyParkingIdAsync({ id }));
  }, []);

  return (
    <div className="m-2 bg-slate-100 h-screen">
      <div className='text-2xl font-bold mb-4 text-white bg-gray-800 p-2 text-center'>
        Guard List
      </div>
      <div className="flex flex-wrap p-12 gap-4">
  {guards && guards.length > 0 ? (
    guards.map((guard) => (
      <div key={guard._id} className="bg-white py-4 px-8 rounded-md shadow-md w-80">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Guard ID: {guard.code}</h1>
          <Link to={`/guard/${guard._id}`} className="flex items-center text-green-600">
            <FaEye className="mr-2 text-2xl" />
          </Link>
        </div>
        <p className="mt-2">Name: {guard.name}</p>
        <p>Phone: {guard.contact}</p>
        <p>Email: {guard.email}</p>
        <p>Address: {guard.address}</p>
      </div>
    ))
  ) : (
    <div className="text-center text-gray-600 w-full">
      <p>No guards are available for this parking.</p>
    </div>
  )}
</div>

    </div>


  );
}

export default GuardList;
