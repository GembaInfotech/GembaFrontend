import { Link } from 'react-router-dom';
import CrudButton from '../../Tools/crudButton';
import ActionButton from '../../Tools/ActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';

function ParkingPage({ parking, edit = true }) {

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteParkingAsync(id));
  }

  return (
    <div className='px-4 max-sm:p-1 bg-slate-200 h-screen'>
      <header className="text-center bg-gray-900 py-3 mb-4">
        <h1 className="text-2xl font-bold text-gray-100">Parking Details</h1>
      </header>
      <div className="text-center mb-4 px-20">
        <h2 className="text-xl font-bold py-2  inline-block bg-slate-100 rounded-sm w-full ">Parking Code: {parking?.code}</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-20'>
        <div className='bg-slate-100 p-4 rounded-md'>
          <h3 className='text-xl font-bold text-center mb-4'>Basic Information</h3>
          <InfoItem label="Parking Name" value={parking?.name} />
          <InfoItem label="Parking Area" value={parking?.address_line1} />
          <InfoItem label="City" value={parking?.city} />
          <InfoItem label="State" value={parking?.state} />
          <InfoItem label="Country" value={parking?.country} />
          <InfoItem label="Pincode" value={parking?.pincode} />
          <InfoItem label="Registration No" value={parking?.registeration_no} />
          <InfoItem label="Validity From Date" value={parking?.validity_FromDate} />
          <InfoItem label="Validity To Date" value={parking?.validity_ToDate} />
          <InfoItem label="Landmark" value={parking?.landmark} />
          <InfoItem label="Description" value={parking?.description} />
        </div>

        <div className='flex flex-col gap-4'>
          <div className='bg-slate-100 p-4 rounded-md'>
            <h3 className='text-xl font-bold text-center mb-4'>Price and Time Information</h3>
            <InfoItem label="Price" value={parking?.price} />
            
            <InfoItem label="Two Wheeler Capacity" value={parking?.twoWheelerCapacity} />
            <InfoItem label="Four Wheeler Capacity" value={parking?.fourWheelerCapacity} />
            <InfoItem label="Total Capacity" value={parking?.totalCapacity} />
            <InfoItem label="Exceed Price" value={parking?.exceed_price} />
            <InfoItem label="Minimum Exceed Time" value={parking?.exceed_price_for} />
          </div>
          <div className='bg-slate-100 p-4 rounded-md'>
            <h3 className='text-xl font-bold text-center mb-4'>Status</h3>
            <InfoItem label="Status" value={parking?.status} />
          </div>
          <div className='bg-slate-100 p-4 rounded-md'>
            <h3 className='text-xl font-bold text-center mb-4'>Location Information</h3>
            <InfoItem label="Latitude" value={parking?.location?.coordinates[0]} />
            <InfoItem label="Longitude" value={parking?.location?.coordinates[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <p className='text-sm font-semibold text-gray-700 mb-2'>
      <span className='font-bold'>{label}:</span> {value}
    </p>
  );
}

export default ParkingPage;
