import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchParkingSpaceByCodeAsync } from '../../../SliceFolder/parkingSpaceSlice/parkingSpace';

function ParkingSpace() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.ParkingSpace?.data);
  console.log(data);
  
  useEffect(() => {
    dispatch(fetchParkingSpaceByCodeAsync("P000000001"));
  }, [dispatch]);

  // Filter spaces by vehicle type
  const twoWheelerSpaces = data.filter(space => space.vehicletype === 'twoWheeler');
  const fourWheelerSpaces = data.filter(space => space.vehicletype === 'fourWheeler');
  console.log(twoWheelerSpaces);

  const totalCapacity = twoWheelerSpaces.length + fourWheelerSpaces.length;

  return (
    <div className="px-4 h-[100%] bg-gradient-to-r from-slate-300 to-slate-400">
      <div className="text-2xl font-bold mb-4 bg-gray-900 text-center text-gray-100 p-4 rounded-lg shadow-lg">
        Total Space Available: {totalCapacity}
      </div>

      <div className='bg-white p-4 mb-8 rounded-lg shadow-lg'>
        <h1 className="text-xl font-bold px-8 py-4 text-gray-800">Space for Two Wheelers</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 px-8">
          {twoWheelerSpaces.map(space => (
            <div
              key={space.spaceId}
              className={`text-center p-4 rounded-lg shadow-md transition-colors duration-300 ${space.isOccupied ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}
            >
              {space.spaceId}
            </div>
          ))}
        </div>
      </div>

      <div className='bg-white p-4 rounded-lg shadow-lg'>
        <h1 className="text-xl font-bold px-8 py-4 text-gray-800">Space for Four Wheelers</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 px-8">
          {fourWheelerSpaces.map(space => (
            <div
              key={space.spaceId}
              className={`text-center p-4 rounded-lg shadow-md transition-colors duration-300 ${space.isOccupied ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}
            >
              {space.spaceId}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParkingSpace;
