import { useDispatch } from 'react-redux';
import { updateBookingAsync, updateBookingPAsync } from '../../../../SliceFolder/BookingSlice/Booking';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { FaRupeeSign } from "react-icons/fa";

function ParkedPopup({ selectedBooking }) {

  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));
  const guardid = storedUserData?.guard?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(selectedBooking);

  useEffect(() => {
    dispatch(updateBookingPAsync({ id: selectedBooking._id }));
  }, [dispatch]);


  const update = (id, parkingid, status) => {

    const data = dispatch(updateBookingAsync({ id, status, tp: 0, parkedAt: selectedBooking?.parkedAt?.spaceName, guardid, spaceId: selectedBooking?.parkedAt?.spaceId }));
    console.log(data);
    navigate(`/${parkingid}/CompletedBooking`);

  }
  return (
    <div className="  w-full">
    <div className="flex gap-4 ml-6 mb-2">
      <div className="flex-1">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
        <p className="text-gray-700">Vehicle Number: {selectedBooking?.vehicle.number}</p>
        <p className="text-gray-700">Vehicle Model: {selectedBooking?.vehicle.name}</p>
        <p className="text-gray-700">Vehicle Type: {selectedBooking?.vehicle.type}</p>
        <p className="text-gray-700">Parked At: {selectedBooking?.parkedAt?.spaceName}</p>
        <p className="text-gray-700">Status: {selectedBooking.status}</p>
      </div>
      {selectedBooking?.exceedTime && (
        <div className="flex-1 mt-4 md:mt-0">
          <div className="bg-yellow-400 shadow-lg rounded-md p-4">
            <p className="text-red-600 text-xl font-bold mb-2">
              Exceed Time: {Math.floor(selectedBooking.exceedTime / 60)} hrs {selectedBooking.exceedTime % 60} min
            </p>
            <div className="flex items-center">
              <p className="text-red-600 text-xl font-bold mr-2">Collect Amount: {Math.round(selectedBooking?.exceedTotalPrice)}</p>
              <FaRupeeSign className="text-red-600 text-xl" />
            </div>
          </div>
        </div>
      )||null}
    </div>
    <button
      onClick={() => update( selectedBooking._id, selectedBooking.parking, "Completed")}
      className="bg-green-500 text-white p-2 rounded-md mr-2 hover:bg-green-700 ml-6"
    >
      Complete
    </button>
  </div>
  


  )
}

export default ParkedPopup