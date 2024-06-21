import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookingAsync } from '../../../../SliceFolder/BookingSlice/Booking';
import { useNavigate } from 'react-router-dom';
import { fetchParkingByGuardIdAsync } from "../../../../SliceFolder/ParkingSlice/Parking";
import { fetchParkingSpaceByCodeAsync } from '../../../../SliceFolder/parkingSpaceSlice/parkingSpace';

function IncomingPopup({ selectedBooking }) {
  const [parkedAt, setParkedAt] = useState('');
  const [selectedSpaceId, setSelectedSpaceId] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));
  const guardid = storedUserData?.guard?._id;

  const code = useSelector((state) => state?.Parking?.data[0]?.code);
  const parkingID = useSelector((state) => state?.Parking?.data[0]?._id);

  const space = useSelector((state) => state?.ParkingSpace?.data || []);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchParkingByGuardIdAsync({ id: guardid }));
    };
    fetchData();
  }, [dispatch, guardid]);

  useEffect(() => {
    if (code) {
      const fetchData = async () => {
        await dispatch(fetchParkingSpaceByCodeAsync(code));
      };
      fetchData();
    }
  }, [dispatch, code]);

  const update = (id, status, parkedAt, spaceId) => {
    const tp = selectedBooking.totalPrice;
    dispatch(updateBookingAsync({ id, status, tp, parkedAt, guardid, spaceId }));
    
    navigate(`/${parkingID}/ParkedBooking`);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
      <p className="text-gray-700">Time In: {new Date(selectedBooking.inTime).toLocaleString()}</p>
      <p className="text-gray-700">Time Out: {new Date(selectedBooking.outTime).toLocaleString()}</p>
      <p className="text-gray-700">Booking Price: {selectedBooking.totalPrice}</p>
      <p className="text-gray-700">Status: {selectedBooking.status}</p>
      
      <div className="mt-4">
        <label className="block text-gray-700">Parked At:</label>
        <select
          value={parkedAt}
          onChange={(e) => {
            const selectedSpace = space.find(s => s.spaceId === e.target.value);
            setParkedAt(e.target.value);
            setSelectedSpaceId(selectedSpace ? selectedSpace._id : '');
          }}
          className="border rounded p-2 w-full"
        >
          <option value="" disabled>Select a parking space</option>
          {space.filter(s => !s.isOccupied).map((s) => (
            <option key={s.spaceId} value={s.spaceId}>
              {s.spaceId} ({s.vehicletype})
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex mt-4">
        <button 
          onClick={() => update(selectedBooking._id, "Parked", parkedAt, selectedSpaceId)} 
          className="bg-green-500 text-white p-2 rounded-md mr-2 hover:bg-green-700"
          disabled={!parkedAt}  // Disable button if no parking space is selected
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default IncomingPopup;
