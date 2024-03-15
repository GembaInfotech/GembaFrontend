import { Link } from 'react-router-dom';
import React from 'react';
import CrudButton from '../../Tools/crudButton';
import ActionButton from '../../Tools/ActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';
function ParkingPage({ parking, edit=true }) {
  const dispatch = useDispatch();

  const handleDelete =(id)=>{
    dispatch(deleteParkingAsync(id))
  }
  return (
    <div className='p-2 max-sm:p-1'>
          <h1 className="font-light text-xl mb-2 bg-gray-300 rounded-sm p-1"> Parking Details</h1>

       {
        edit &&   <div className='flex flex-row '>
           <Link to={`/update/${parking._id}`}>
        <CrudButton  name="Update" />
       </Link>
        <button onClick={()=> { handleDelete(parking._id)}}>
        <CrudButton name="Delete" />
        </button>
          </div>
       }
              

         <div  >
        <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Basic Information</h1>
        <p className='text-sm font-semibold text-gray-700 p-1'>Parking Name: {parking.pn}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>Parking Area: {parking.pa}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>City: {parking.city}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>State: {parking.st}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>Country: {parking.country}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>Pincode: {parking.pc}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>License No: {parking.ln}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>State Code: {parking.sc}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>Landmark: {parking.lm}</p>

        </div>
          <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Price and Time Information</h1>

          <p className='text-sm font-semibold text-gray-700 p-1'>Price: {parking.price}</p>
          <p className='text-sm font-semibold text-gray-700 p-1'>Capacity: {parking.cc}</p>
            <p className='text-sm font-semibold text-gray-700 p-1'>Exceed Price: {parking.ep}</p>
             <p className='text-sm font-semibold text-gray-700 p-1'>Minimum Time: {parking.mt}</p>
             <p className='text-sm font-semibold text-gray-700 p-1'>Minimum Exceed Time: {parking.met}</p>
          </div>
          <div className='bg-gray-100 my-2 p-2'>
          <h1 className='text-xl font-light mb-1 '>Subscription Information</h1>

          <p className='text-sm font-semibold text-gray-700 p-1'>Subscription: {parking.sub ? 'Yes' : 'No'}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>Subscription Code: {parking.subc}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>Subscription Amount: {parking.subamt}</p>
          </div>
      <div className='bg-gray-100 my-2 p-2'>
      <h1 className='text-xl font-light mb-1 '>Timing Information</h1>

      <p className='text-sm font-semibold text-gray-700 p-1'>Latitude: {parking.lc.cord[0]}</p>
           <p className='text-sm font-semibold text-gray-700 p-1'>Longitude: {parking.lc.cord[1]}</p>
      </div>
          
      {
        edit &&     <div className='bg-gray-100 my-2 p-2'>
        <h1 className='text-xl font-light mb-2 '>Guard Information</h1>

        {
             parking.assg ?  <Link to={`/guard/${parking.assg}`}>
        <ActionButton name="View Guard"/>
          </Link>:          <Link to={`/createGuard/${parking._id}`}> <ActionButton name="Add Guard"/> </Link>

        }
        </div>
        
      }




          </div>
      
    </div>
  );
}

export default ParkingPage;
