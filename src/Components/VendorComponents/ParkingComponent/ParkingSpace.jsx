import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchParkingSpaceByCodeAsync } from '../../../SliceFolder/parkingSpaceSlice/parkingSpace';
import { fetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { parkings } from '../../../SliceFolder/ParkingSlice/Parking';
import { upcomingBookingIn15minAsync } from '../../../SliceFolder/BookingSlice/Booking';

function ParkingSpace() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.ParkingSpace?.data);
  const upcomingVehicles = useSelector((state) => state?.booking?.data);
  const [value, setSelectedParking] = useState(null);

  const data1 = useSelector(parkings);

  useEffect(() => {
    dispatch(fetchParkingsAsync());
  }, [dispatch]);

  const handleParkingChange = (event) => {
    const [parkingCode, parkingid] = event.target.value.split('-');
    setSelectedParking(event.target.value);

    dispatch(upcomingBookingIn15minAsync({ parkingid }));
    dispatch(fetchParkingSpaceByCodeAsync(parkingCode));
  };

  const twoWheelerSpaces = data.filter((space) => space.vehicletype === 'twoWheeler');
  const fourWheelerSpaces = data.filter((space) => space.vehicletype === 'fourWheeler');

  const totalCapacity = twoWheelerSpaces.length + fourWheelerSpaces.length;
  
  const formatTime = (dateTimeString) => {
    const timePart = dateTimeString.split('T')[1];
    return timePart;
  };

  return (
    <div className="px-4 pb-8 h-[screen] bg-gradient-to-r from-slate-300 to-slate-400">
      <div className="text-2xl font-bold mb-4 bg-gray-900 text-center text-gray-100 p-4 rounded-lg shadow-lg">
        Total Space Available: {totalCapacity}
      </div>
      
      <div className='px-6 py-2 font-bold text-lg'>
        <label htmlFor="parkingDropdown">Select Parking:</label>
        <select
          id="parkingDropdown"
          onChange={handleParkingChange}
          value={value || ''}
          className='bg-slate-200 mx-1 p-2 border border-white rounded-sm'
        >
          <option value="" disabled>Select a parking</option>
          {data1?.data?.map((parking, index) => (
            <option key={index} value={`${parking.code}-${parking._id}`}>
              {parking.name}
            </option>
          ))}
        </select>
      </div>

      <div className='bg-white p-4 mb-8 rounded-lg shadow-lg'>
        <h1 className='text-xl font-bold px-8 py-4 text-gray-800'>Upcoming Bookings Within 15 min</h1>
        <div className='flex flex-wrap gap-4 ml-8'>
          {upcomingVehicles.length > 0 ? (
            upcomingVehicles.map((item) => (
              <div
                key={item.id}
                className='bg-yellow-300 text-gray-900 p-8 border rounded-lg shadow-md flex flex-col w-64 mb-4'
              >
                <div className='text-sm mb-1'><span className="font-semibold">Booking Code:</span> {item.code}</div>
                <div className='text-sm mb-1'><span className="font-semibold">Vehicle Number:</span> {item.vehicle_number}</div>
                <div className='text-sm mb-1'><span className="font-semibold">Vehicle Model:</span> {item.vehicle_name}</div>
                <div className='text-sm mb-1'>
                  <span className="font-semibold mr-2">Vehicle Intime:</span>
                  <span className='bg-green-600 text-white px-2 py-1 rounded'>{formatTime(item.inTime)}</span>
                </div>
                {/* <div className='text-sm'><span className="font-semibold">Parking Name:</span> {item.parkingName}</div> */}
              </div>
            ))
          ) : (
            <div className='bg-red-600 text-white p-6 border rounded shadow-md flex flex-col w-64 mb-4'>
              <div className='text-sm text-center'><span className="font-semibold">No upcoming booking in 15 min</span></div>
            </div>
          )}
        </div>
      </div>

      <div className='bg-white p-4 mb-8 rounded-lg shadow-lg'>
        <h1 className="text-xl font-bold px-8 py-4 text-gray-800">Space for Two Wheelers</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 px-8">
          {twoWheelerSpaces.map((space) => (
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
          {fourWheelerSpaces.map((space) => (
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
