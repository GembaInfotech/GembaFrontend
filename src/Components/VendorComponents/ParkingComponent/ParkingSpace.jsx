import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchParkingSpaceByCodeAsync } from '../../../SliceFolder/parkingSpaceSlice/parkingSpace';
import { fetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { parkings } from '../../../SliceFolder/ParkingSlice/Parking';

function ParkingSpace() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.ParkingSpace?.data);
  console.log(data);
  const [value, setSelectedParking] = useState(null);

  const data1 = useSelector(parkings);

  console.log(data1);


  useEffect(() => {
    dispatch(fetchParkingsAsync());
  }, [dispatch]);


  const handleParkingChange = (event) => {
    const selectedValue = event.target.value;

    setSelectedParking(selectedValue);
    const parkingCode = selectedValue;
    dispatch(fetchParkingSpaceByCodeAsync(parkingCode))
  };

  const twoWheelerSpaces = data.filter(space => space.vehicletype === 'twoWheeler');
  const fourWheelerSpaces = data.filter(space => space.vehicletype === 'fourWheeler');
  console.log(twoWheelerSpaces);

  const totalCapacity = twoWheelerSpaces.length + fourWheelerSpaces.length;

  return (
    <div className="px-4 pb-8 h-[screen] bg-gradient-to-r from-slate-300 to-slate-400">

      <div className="text-2xl font-bold mb-4 bg-gray-900 text-center text-gray-100 p-4 rounded-lg shadow-lg">
        Total Space Available: {totalCapacity}
      </div>

      <div>
        <div className='px-6 py-2 font-bold text-lg'> <label htmlFor="parkingDropdown">Select Parking:</label>
          <select id="parkingDropdown" onChange={handleParkingChange} value={value || ''} className='bg-slate-200 mx-1 p-2 border border-white rounded-sm'>
            <option value="" disabled>Select a parking</option>
            {data1?.data?.map((parking, index) => (
              <option key={index} value={parking.code}>
                {parking.name}
              </option>
            ))}
          </select>
        </div>
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