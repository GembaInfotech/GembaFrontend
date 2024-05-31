import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import CrudButton from '../../Tools/crudButton';
import ActionButton from '../../Tools/ActionButton';
import { useDispatch } from 'react-redux';
import { fetchParkingById } from '../../../Services/ApiService/ParkingApi';


function ParkingCard({ parking }) {
  const dispatch = useDispatch();
  console.log(parking);
  if (parking.status === 'pending') {
    return null; // Do not render the component
  }

  return (
    <div className='p-2 flex justify-between bg-[#F8F8FF]
    mt-2 max-sm:m-1 max-sm:p-1 rounded-md shadow-md min-h-[20vh]'>
      <div>
        <p className='font-semibold  text-xl  text-gray-700 '>{parking.name}</p>
        <p className='  text-gray-500  text-sm' >{parking.address_line1}</p>
        <p className='  text-gray-500 text-sm '>{parking.city}</p>
      </div>
      <div className='flex  '>
      <div>
       <Link  to={`/parking/${parking._id}`}>
<CrudButton name="Open" />        </Link>
       </div>
    <div>
    <Link to={`/update/${parking._id}`}>
            <CrudButton name="Update" />
          </Link>
    </div>

<div>
<button onClick={() => { handleDelete(parking._id) }}>
            <CrudButton name="Delete" />
          </button>
</div>
        
            
       <div>
       {parking.guard_id.length === 0 ? (
    <Link to={`/createGuard/${parking._id}`}>
        <CrudButton name="Add Guard" />
    </Link>
) : (
    <Link to={`/guard/${parking.guard_id}`}>
        <CrudButton name="View Guard" />
    </Link>
)}

       </div>
        
       


           </div>
    </div>
  );
}
export default ParkingCard;
