import { useDispatch} from 'react-redux';
import { updateBookingAsync } from '../../../../SliceFolder/BookingSlice/Booking';
import { useNavigate} from 'react-router-dom';

function IncomingPopup({selectedBooking}) {
  console.log(selectedBooking);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const update=(id, status)=>{
    const tp = selectedBooking.totalPrice
      dispatch(updateBookingAsync({id,status,tp }));
      navigate(`/${id}/ParkedBooking`);
  }
  return (
<div>

<h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
{/* <p className="text-gray-700">Car Number: {selectedBooking.num}</p> */}
  <p className="text-gray-700">Time In: {new Date(selectedBooking.inTime).toLocaleString()}</p>
  <p className="text-gray-700">Time Out: {new Date(selectedBooking.outTime).toLocaleString()}</p>
  <p className="text-gray-700">Booking Price: {selectedBooking.totalPrice}</p>
  <p className="text-gray-700">Status: {selectedBooking.status}</p>
  <div className="flex mt-4">
      <button onClick={()=>update(selectedBooking._id, "Parked")} className="bg-green-500 text-white p-2 rounded-md mr-2 hover:bg-green-700">Confirm</button>
      
  </div>
</div>
  )
}

export default IncomingPopup