import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateBookingAsync } from '../../../../SliceFolder/BookingSlice/Booking';
import { Link, useParams } from 'react-router-dom';
import { guardfetchParkingsAsync } from '../../../../SliceFolder/ParkingSlice/Parking';

function ParkedPopup({ selectedBooking }) {
  const { parkingid } = useParams();
  const [loading, setLoading] = useState(true);
  const [tp, setTp] = useState(0);
  const id = parkingid

  const data = useSelector((state) => state?.Parking?.data);
  console.log(data);

  const etInMin = (days, hours, minutes) => {
    const etInmin = (days * 24 * 60) + (hours * 60) + minutes
    return etInmin / 10
  }

  const dispatch = useDispatch();

  useEffect(() => async () => {
    if (data == null) {
      dispatch(guardfetchParkingsAsync({ id }));
    }
    setLoading(false)

  }, [dispatch]);

  const calculateExceedTime = (checkoutTime) => {
    const currentTime = Date.now();

    if (!checkoutTime || isNaN(new Date(checkoutTime).getTime())) {
      return { days: 0, hours: 0, minutes: 0 };
    }
    const exceedTimeInMillis = Math.max(0, currentTime - new Date(checkoutTime).getTime());
    const days = Math.floor(exceedTimeInMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((exceedTimeInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((exceedTimeInMillis % (1000 * 60 * 60)) / (1000 * 60));
    let etInmin = etInMin(days, hours, minutes)
    return { days, hours, minutes, etInmin };
  };

  const etInminn = calculateExceedTime(selectedBooking.out).etInmin;

  const update = (id, status) => {
    const exceededPrice = etInmin? Math.round(calculateExceedTime(selectedBooking.out).etInmin * (data?.ep)) + 2 * Math.round(0.09 * Math.round(calculateExceedTime(selectedBooking.out).etInmin * (data?.ep))) : 0
    const val = selectedBooking.price + 2 * Math.round(selectedBooking.price*0.09) + exceededPrice
    setTp(val);

    dispatch(updateBookingAsync({ id, status, tp: val }));
  }
  return (
    <div>
      {
        loading ? <h2>loading</h2> : <div>
          <h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
          <p className="text-gray-700">Car Number: {selectedBooking.num}</p>
          <p className="text-gray-700">Time In: {new Date(selectedBooking.In).toLocaleString()}</p>
          <p className="text-gray-700">Time Out: {new Date(selectedBooking.out).toLocaleString()}</p>
          <p className="text-gray-700">Status: {selectedBooking.status}</p>
          <p className="text-gray-700">Booking Price: {selectedBooking.price + 2 * Math.round(selectedBooking.price * 0.09)}</p>

          <p className="text-gray-700">
            Exceed Time:
            {calculateExceedTime(selectedBooking.out).days > 0 && (
              <span>{calculateExceedTime(selectedBooking.out).days} days </span>
            )}
            {calculateExceedTime(selectedBooking.out).hours > 0 && (
              <span>{calculateExceedTime(selectedBooking.out).hours} hours </span>
            )}
            {calculateExceedTime(selectedBooking.out).minutes > 0 && (
              <span>{calculateExceedTime(selectedBooking.out).minutes} minutes</span>
            )}

          </p>
          <p>Collect : {calculateExceedTime(selectedBooking.out).etInmin > 0.8 && (
            <span className="text-red-500">{Math.round(calculateExceedTime(selectedBooking.out).etInmin * (data?.ep))}+ tax({2*Math.round(0.09 * Math.round(calculateExceedTime(selectedBooking.out).etInmin * (data?.ep)))})= {Math.round(calculateExceedTime(selectedBooking.out).etInmin * (data?.ep)) +2* Math.round(0.09 * Math.round(calculateExceedTime(selectedBooking.out).etInmin * (data?.ep)))}</span>
          )}</p>

          <div className="flex mt-4">
            <Link
              to={{
                pathname: `/generatee/${encodeURIComponent(JSON.stringify(selectedBooking))}/${etInminn}/${data?.ep}`,
                state: { selectedBooking },
              }}
            >
              <button onClick={() => update(selectedBooking._id, "Completed")} className="bg-green-500 text-white p-2 rounded-md mr-2 hover:bg-green-700">Confirm</button>

            </Link>
          </div>


        </div>
      }
    </div>
  )
}

export default ParkedPopup