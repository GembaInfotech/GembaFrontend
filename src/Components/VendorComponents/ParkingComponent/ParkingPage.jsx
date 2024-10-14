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
    <div className='px-4 max-sm:p-1 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 h-[100%]'>
      {/* Header */}
      <header className="text-center bg-gray-800 py-6 shadow-lg mb-8">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
          Parking Details
        </h1>
      </header>
      {/* Image Gallery - scrollable without showing scrollbar */}
      <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth mb-4 p-2 mx-20'>
      {parking?.image.map((img, index) => (
        <img
          key={index}
          src={`http://localhost:3456/v1/api/parking/send-parking-image/${img}`}
          alt={`Parking Image ${index + 1}`}
          className='rounded-2xl h-32 sm:h-48 transition-transform transform hover:scale-105 shadow-lg flex-shrink-0 snap-start'
        />
      ))}
    </div>

       {/* Parking Code */}
       <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold py-4 bg-white shadow-md rounded-lg  mx-20 ">
          Parking Code: {parking?.code}
        </h2>
      </div>
  
      {/* Information Sections */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-20 mb-4'>
        {/* Basic Information */}
        <div className='bg-white p-6 shadow-lg rounded-lg'>
          <h3 className='text-2xl font-bold text-center mb-6 text-gray-800'>
            Basic Information
          </h3>
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
  
        {/* Price, Time, Status, and Location Information */}
        <div className='flex flex-col gap-6'>
          {/* Price and Time Information */}
          <div className='bg-white p-6 shadow-lg rounded-lg'>
            <h3 className='text-2xl font-bold text-center mb-6 text-gray-800'>
              Price and Time Information
            </h3>
            <InfoItem label="Price" value={parking?.price} />
            <InfoItem label="Two Wheeler Capacity" value={parking?.twoWheelerCapacity} />
            <InfoItem label="Four Wheeler Capacity" value={parking?.fourWheelerCapacity} />
            <InfoItem label="Total Capacity" value={parking?.totalCapacity} />
            <InfoItem label="Exceed Price" value={parking?.exceed_price} />
            <InfoItem label="Minimum Exceed Time" value={parking?.exceed_price_for} />
          </div>
  
          {/* Status Information */}
          <div className='bg-white p-6 shadow-lg rounded-lg'>
            <h3 className='text-2xl font-bold text-center mb-6 text-gray-800'>
              Status
            </h3>
            <InfoItem label="Status" value={parking?.status} />
          </div>
  
          {/* Location Information */}
          <div className='bg-white p-6 shadow-lg rounded-lg'>
            <h3 className='text-2xl font-bold text-center mb-6 text-gray-800'>
              Location Information
            </h3>
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
