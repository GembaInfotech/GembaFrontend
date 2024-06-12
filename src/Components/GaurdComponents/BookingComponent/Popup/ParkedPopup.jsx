import { useDispatch} from 'react-redux';
import { updateBookingAsync } from '../../../../SliceFolder/BookingSlice/Booking';
import { useNavigate } from 'react-router';

function ParkedPopup({ selectedBooking }) {

  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));
  const guardid = storedUserData?.guard?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const update = (id, status) => {

    const data = dispatch(updateBookingAsync({ id, status, tp: 0, parkedAt: selectedBooking?.parkedAt?.spaceName, guardid, spaceId: selectedBooking?.parkedAt?.spaceId }));
    console.log(data);
    navigate(`/${id}/CompletedBooking`);

  }
  return (
    <div>
        <div>

          <div className="  p-4">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
            <p className="text-gray-700">Vehicle Number: {selectedBooking?.vehicle_number}</p>
            <p className="text-gray-700">Vehicle Model: {selectedBooking?.vehicle_name}</p>
            <p className="text-gray-700">Parked At: {selectedBooking?.parkedAt?.spaceName}</p>
            <p className="text-gray-700 mb-2">Status: {selectedBooking.status}</p>
            <button onClick={() => update(selectedBooking._id, "Completed")} className="bg-green-500 text-white p-2  rounded-md mr-2 hover:bg-green-700">Complete</button>

          </div>

        </div>
    </div>
  )
}

export default ParkedPopup