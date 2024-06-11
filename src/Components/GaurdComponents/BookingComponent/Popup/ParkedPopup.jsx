import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateBookingAsync } from '../../../../SliceFolder/BookingSlice/Booking';
import { Link, useParams } from 'react-router-dom';
import { guardfetchParkingsAsync } from '../../../../SliceFolder/ParkingSlice/Parking';

function ParkedPopup({ selectedBooking }) {
  const { parkingid } = useParams();
  const [loading, setLoading] = useState(true);
  const id = parkingid
console.log(selectedBooking);
  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));
  const guardid = storedUserData?.guard?._id;

  console.log();

  const data = useSelector((state) => state?.Parking?.data);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => async () => {
    if (data == null) {
      dispatch(guardfetchParkingsAsync({ id }));
    }
    setLoading(false)
  }, [dispatch]);

 
  const update = (id, status) => {
               

    const data =  dispatch(updateBookingAsync({ id, status, tp: 0, parkedAt:selectedBooking?.parkedAt?.spaceName, guardid, spaceId:selectedBooking?.parkedAt?.spaceId  }));
    console.log(data);
  }
  return (
    <div>


      {
        loading ? <h2>loading</h2> : <div>
        

          <div className="flex mt-4">
           
              <button onClick={() => update(selectedBooking._id, "Completed")} className="bg-green-500 text-white p-2 rounded-md mr-2 hover:bg-green-700">Confirm</button>

          
          </div>


        </div>
      }
    </div>
  )
}

export default ParkedPopup