import { Link } from 'react-router-dom';
import CrudButton from '../../Tools/crudButton';
import ActionButton from '../../Tools/ActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';
function ParkingPage({ parking, edit = true }) {

console.log(parking);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteParkingAsync(id))
  }

  return (
    <div className='p-2 max-sm:p-1'>
      <h1 className="font-light text-xl mb-2 bg-gray-300 rounded-sm p-1"> Parking Details</h1>
    
      <div>
        <div className='bg-gray-100 my-2 p-2 w-full'>
          <h1 className='text-xl font-light mb-1 '>Basic Information</h1>
          <p className='text-sm font-semibold text-gray-700 p-1 w-[400px]'> <span className='bg-gray-200 rounded-sm  w-64'>Parking Name: </span> <span className='bg-white p-2 w-64  rounded-sm'>{parking?.name}  </span> </p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Parking Area: {parking?.address_line1}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>City: {parking?.city}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>State: {parking?.state}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Country: {parking?.country}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Pincode: {parking?.pincode}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Registration No: {parking?.registeration_no}</p>
          {/* <p className='text-sm font-semibold text-gray-700 p-1'>State Code: {parking.sc}</p> */}
          <p className='text-sm font-semibold text-gray-700 p-1'>Landmark: {parking?.landmark}</p>

        </div>
        <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Price and Time Information</h1>
          <p className='text-sm font-semibold text-gray-700 p-1'>Price: {parking.price}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Capacity: {parking.capacity}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Exceed Price: {parking.exceed_price}</p>
          {/* <p className='text-sm font-semibold text-gray-700 p-1'>Minimum Time: {parking[0].mt}</p> */}
          <p className='text-sm font-semibold text-gray-700 p-1'>Minimum Exceed Time: {parking.exceed_price_for}</p>
        </div>
        <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Status</h1>
          <p className='text-sm font-semibold text-gray-700 p-1'>Status: {parking.status }</p>
          {/* <p className='text-sm font-semibold text-gray-700 p-1'>Subscription Code: {parking.subc}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Subscription Amount: {parking.subamt}</p> */}
        </div>
        <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Location Information</h1>
          <p className='text-sm font-semibold text-gray-700 p-1'>Latitude: {parking?.location?.coordinates[0]}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Longitude: {parking?.location?.coordinates[1]}</p>
        </div>
      
      </div>
    </div>
  );
}

export default ParkingPage;
