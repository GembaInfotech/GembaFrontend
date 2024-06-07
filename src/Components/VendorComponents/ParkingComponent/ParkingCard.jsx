import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchParkingById } from '../../../Services/ApiService/ParkingApi';

function ParkingCard({ parking }) {
  const dispatch = useDispatch();
  console.log(parking?.guard_id);

  const handleDelete = (id) => {
    // Add your delete logic here
    console.log(`Delete parking with id: ${id}`);
  };

  return (
    <div className={`p-4 flex flex-col justify-between w-full md:w-2/3 lg:w-[45%] bg-white border border-gray-200 rounded-lg shadow-md mt-4 ${parking?.status === "pending" ? 'bg-red-100' : ''}`}>
      <div className='px-4 '>
        <p className='font-bold text-lg text-gray-800 mb-1'>Parking Id: {parking?.code}</p>
        <p className='font-semibold text-gray-700 mb-1'>Parking Name: {parking?.name}</p>
        <p className='text-gray-500 text-sm mb-1'><span className='text-gray-800 font-semibold'>Parking Address:</span> {parking?.address_line1}</p>
        <p className='text-gray-500 text-sm mb-2'><span className='text-gray-800 font-semibold'>City:</span> {parking?.city}</p>
      </div>
      <div className='flex justify-center gap-2 py-3'>
        {parking?.status !== "pending" && (
          <>
            <Link to={`/parking/${parking?._id}`}>
              <div className="text-blue-600 font-semibold rounded-lg px-3 py-1 shadow-md hover:bg-blue-100 transition-colors duration-200">
                Open
              </div>
            </Link>
  
            <Link to={`/update/${parking?._id}`}>
              <div className="text-yellow-600 font-semibold rounded-lg px-3 py-1 shadow-md hover:bg-yellow-100 transition-colors duration-200">
                Update
              </div>
            </Link>
  
            <button onClick={() => handleDelete(parking?._id)} className="text-red-600 font-semibold rounded-lg px-3 py-1 shadow-md hover:bg-red-100 transition-colors duration-200">
              Delete
            </button>
  
            <Link to={`/guardList/${parking?._id}`}>
              <div className="text-pink-600 font-semibold rounded-lg px-3 py-1 shadow-md hover:bg-pink-100 transition-colors duration-200">
                Guard list
              </div>
            </Link>
  
            <Link to={`/createGuard/${parking?._id}`}>
              <div className="text-green-600 font-semibold rounded-lg px-3 py-1 shadow-md hover:bg-green-100 transition-colors duration-200">
                Add Guard
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ParkingCard;
