import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchGuardsAsync } from "../../../SliceFolder/GuardSlice/guard";
import { Link } from "react-router-dom";

const GaurdDetail = () => {
  const dispatch = useDispatch();
  const guard = useSelector((state) => state.Guard)
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGuardsAsync({ id }));
  }, []);

  return (

    <div>
      { guard.status == "loading" && !guard.error && <div className='flex justify-center items-center min-h-screen'><PulseLoader color="#000" /></div>}

      { guard.status == "failed" && <div><h1 className='text-red-500 p-4'>Some error Occured While Loading the Data... Kindly Refresh or Login Again...</h1></div>}

      { guard.status == "succeeded" && guard.data != [] && !guard.error && <div className="container mx-auto  px-16 py-8">
          <div>
            <h1 className="font-light text-xl mb-2 bg-gray-300 rounded-sm p-1"> Guard Detail</h1>
            <h1 className="font-light text-xl mb-2 bg-gray-300 rounded-sm p-1"> Guard code : {guard.data.code}</h1>

            <div className='flex justify-between bg-gray-100 h-[80%] '>
              <div className='px-2 py-8'>
                <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Name:</span> {guard.data.name}</p>
                <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Phone:</span> {guard.data.contact}</p>
                <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Email:</span> {guard.data.email}</p>
                <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Address:</span> {guard.data.address}</p>
              </div>
              <Link to={`/update/guard/${id}`}>
  <MdEdit />
</Link>

            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default GaurdDetail;
