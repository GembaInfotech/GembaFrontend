import { Link } from 'react-router-dom';
import CrudButton from '../../../Components/Tools/CrudButton';
import ActionButton from '../../../Components/Tools/ActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';
function ParkingPageForGuard({ parking, edit = true }) {

console.log(parking);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteParkingAsync(id))
  }

  return (
    <div className='p-2 max-sm:p-1'>
      <h1 className="font-light text-xl mb-2 bg-gray-300 rounded-sm p-1"> Parking Details</h1>
      {edit &&
        <div className='flex flex-row '>
          <Link to={`/update/${parking._id}`}>
            <CrudButton name="Update" />
          </Link>
          <button onClick={() => { handleDelete(parking._id) }}>
            <CrudButton name="Delete" />
          </button>
        </div>
      }

      <div>
        <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Basic Information</h1>
          <p className='text-sm font-semibold text-gray-700 p-1'>Parking Name: {parking[0]?.name}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Parking Area: {parking[0]?.address_line1}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>City: {parking[0]?.city}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>State: {parking[0]?.state}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Country: {parking[0]?.country}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Pincode: {parking[0]?.pincode}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Registration No: {parking[0]?.registeration_no}</p>
          {/* <p className='text-sm font-semibold text-gray-700 p-1'>State Code: {parking.sc}</p> */}
          <p className='text-sm font-semibold text-gray-700 p-1'>Landmark: {parking[0]?.landmark}</p>

        </div>
        <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Price and Time Information</h1>
          <p className='text-sm font-semibold text-gray-700 p-1'>Price: {parking[0]?.price}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Capacity: {parking[0]?.capacity}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Exceed Price: {parking[0]?.exceed_price}</p>
          {/* <p className='text-sm font-semibold text-gray-700 p-1'>Minimum Time: {parking[0].mt}</p> */}
          <p className='text-sm font-semibold text-gray-700 p-1'>Minimum Exceed Time: {parking[0]?.exceed_price_for}</p>
        </div>
        {/* <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Subscription Information</h1>
          <p className='text-sm font-semibold text-gray-700 p-1'>Subscription: {parking.sub ? 'Yes' : 'No'}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Subscription Code: {parking.subc}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Subscription Amount: {parking.subamt}</p> */}
        {/* </div> */}
        <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Location Information</h1>
          <p className='text-sm font-semibold text-gray-700 p-1'>Latitude: {parking[0]?.location?.coordinates[0]}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Longitude: {parking[0]?.location?.coordinates[1]}</p>
        </div>
        {edit &&
          <div className='bg-gray-100 my-2 p-2'>
            <h1 className='text-xl font-light mb-2 '>Guard Information</h1>
            
            {parking.guard_id ? <Link to={`/guard/${parking.guard_id}`}>
              <ActionButton name="View Guard" />
            </Link> : <Link to={`/createGuard/${parking._id}`}> <ActionButton name="Add Guard" /> </Link>
            }
          </div>
        }
      </div>
    </div>
  );
}

export default ParkingPageForGuard;
