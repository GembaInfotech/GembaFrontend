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
      <div className='p-1 px-2 bg-blue-200 m-1 rounded-md'>
        <h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
        <p className="text-gray-700">Vehicle Number: {selectedBooking?.vehicle_number}</p>
        <p className="text-gray-700">Vehicle Model: {selectedBooking?.vehicle_name}</p>
        <p className="text-gray-700">Vehicle Type: {selectedBooking?.vehicle_type}</p>
        <p className="text-gray-700">Parked At: {selectedBooking?.parkedAt?.spaceName}</p>
        <p className="text-gray-700">Status: {selectedBooking.status}</p>
      </div>
      {selectedBooking?.exceedTime && (
        <div className="mt-10">
          <div className="bg-blue-200 mb-2 shadow-lg rounded-md p-4">
            <p className="text-black text-xl font-semibold mb-2">
              Exceed Time: {Math.floor(selectedBooking.exceedTime / 60)} hrs {selectedBooking.exceedTime % 60} min
            </p>
            <div className="flex items-center">

              <p className="text-black text-xl font-semibold mr-2">Collect Amount: <div className='flex'>              <FaRupeeSign  className='text-black mt-1' />
              {Math.round(selectedBooking?.exceedTotalPrice)} </div></p>
            </div>
          </div>
        </div>
      )}
    </div>
    <button onClick={() => update(selectedBooking._id, "Completed")} className="bg-green-500 text-white p-2 rounded-md mr-2 hover:bg-green-700">
      Complete
    </button>
  </div>
  



  )
}

export default ParkedPopup