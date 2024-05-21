import React from 'react';
import { Link } from 'react-router-dom';
import CrudButton from '../../Tools/crudButton';

function ParkingCard({ parking }) {
  console.log(parking);
  if (parking.status === 'pending') {
    return null; // Do not render the component
  }

  return (
    <div className='p-2 flex justify-between  mt-2 max-sm:m-1 max-sm:p-1 bg-gray-100 rounded-md'>
      <div>
        <p className='font-semibold  text-xl  text-gray-700 '>{parking.name}</p>
        <p className='font-semibold  text-gray-700 ' >{parking.address_line1}</p>
        <p className='font-semibold  text-gray-700 '>{parking.city}</p>
      </div>
      <div className='flex items-center '>
        <Link to={`/parking/${parking._id}`}>
          <CrudButton name="View" />
        </Link>
      </div>
    </div>
  );
}
export default ParkingCard;
