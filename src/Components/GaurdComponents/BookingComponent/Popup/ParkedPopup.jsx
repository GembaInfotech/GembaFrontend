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


  const update = (id, status) => {

    const data = dispatch(updateBookingAsync({ id, status, tp: 0, parkedAt: selectedBooking?.parkedAt?.spaceName, guardid, spaceId: selectedBooking?.parkedAt?.spaceId }));
    console.log(data);
    navigate(`/${id}/CompletedBooking`);

  }
  return (
    <div className="">
  <div className="flex gap-4">
    <div>
      <h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
      <p className="text-gray-700">Vehicle Number: {selectedBooking?.vehicle_number}</p>
      <p className="text-gray-700">Vehicle Model: {selectedBooking?.vehicle_name}</p>
      <p className="text-gray-700">Vehicle Type: {selectedBooking?.vehicle_type}</p>
      <p className="text-gray-700">Parked At: {selectedBooking?.parkedAt?.spaceName}</p>
      <p className="text-gray-700">Status: {selectedBooking.status}</p>
    </div>
    {selectedBooking?.exceedTime != 0 ? (
      <div className="mt-10">
        <div className="bg-yellow-400 mb-2 shadow-lg rounded-md p-4">
          <p className="text-red-600 text-xl font-bold mb-2">
            Exceed Time: {selectedBooking?.exceedTime} min
          </p>
          <p className="text-red-600 text-xl font-bold" >
            Collect Amount: {Math.round(selectedBooking?.exceedTotalPrice)}
            <FaRupeeSign  />
          </p>
        </div>
      </div>
    ) : null}
  </div>
  <button onClick={() => update(selectedBooking._id, "Completed")} className="bg-green-500 text-white p-2 rounded-md mr-2 hover:bg-green-700">
    Complete
  </button>
</div>


  )
}

export default ParkedPopup