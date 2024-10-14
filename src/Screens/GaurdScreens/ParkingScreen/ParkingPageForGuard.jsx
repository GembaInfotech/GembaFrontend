import { Link } from 'react-router-dom';
// import CrudButton from '../../../Components/Tools/CrudButton';
import { useDispatch } from 'react-redux';
import { deleteParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';

function ParkingPageForGuard({ parking, edit = true }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteParkingAsync(id));
  };

  return (
    <div className='px-4 max-sm:p-1'>
      <h1 className="font-bold text-2xl text-white mb-4 text-center bg-gray-800 rounded p-2">Parking Details</h1>
      {edit && (
        <div className='flex justify-center mb-4 space-x-4'>
          <Link to={`/update/${parking._id}`}>
            <CrudButton name="Update" />
          </Link>
          <button onClick={() => handleDelete(parking._id)}>
            <CrudButton name="Delete" />
          </button>
        </div>
      )}

      <div className='flex flex-wrap gap-4'>
      <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth mb-2 p-2 ml-2 mr-12'>
      {parking[0]?.image.map((img, index) => (
        <img
          key={index}
          src={`http://localhost:3456/v1/api/parking/send-parking-image/${img}`}
          alt={`Parking Image ${index + 1}`}
          className='rounded-2xl h-32 sm:h-48 transition-transform transform hover:scale-105 shadow-lg flex-shrink-0 snap-start'
        />
      ))}
    </div>
        <div className='bg-gray-100 my-2 p-8   w-full lg:w-[55%] rounded shadow-lg'>
          <h1 className='text-xl font-bold mb-4 text-center'>Basic Information</h1>
          <Detail label="Parking Name" value={parking[0]?.name} />
          <Detail label="Parking Area" value={parking[0]?.address_line1} />
          <Detail label="City" value={parking[0]?.city} />
          <Detail label="State" value={parking[0]?.state} />
          <Detail label="Country" value={parking[0]?.country} />
          <Detail label="Pincode" value={parking[0]?.pincode} />
          <Detail label="Registration No" value={parking[0]?.registeration_no} />
          <Detail label="Landmark" value={parking[0]?.landmark} />
          <Detail label="Capacity for Two Wheeler" value={parking[0]?.twoWheelerCapacity} />
          <Detail label="Capacity for Four Wheeler" value={parking[0]?.fourWheelerCapacity} />
        </div>

        <div className='w-full lg:w-[40%] space-y-4'>
          <div className='bg-gray-100 my-2 p-8 rounded shadow-lg'>
            <h1 className='text-xl font-bold mb-4'>Price and Time Information</h1>
            <Detail label="Price for" value={`${parking[0]?.price_for} hrs`} />

            <Detail label="Price For Two Wheeler" value={parking[0]?.priceT} />
            <Detail label="Price For Four Wheeler" value={parking[0]?.priceF} />

            <Detail label="Exceed price for" value={`${parking[0]?.exceed_price_for} min`} />

            <Detail label="Exceed Price for Two Wheeler" value={parking[0]?.exceed_priceT} />
            <Detail label="Exceed Price for Four Wheeler" value={parking[0]?.exceed_priceF} />
            
          </div>
          <div className='bg-gray-100 my-2 p-8 rounded shadow-lg'>
            <h1 className='text-xl font-bold mb-4'>Location Information</h1>
            <Detail label="Latitude" value={parking[0]?.location?.coordinates[0]} />
            <Detail label="Longitude" value={parking[0]?.location?.coordinates[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Detail = ({ label, value }) => (
  <p className='text-sm font-semibold text-gray-700 p-1'>
    <span className='font-bold'>{label}:</span> {value}
  </p>
);

export default ParkingPageForGuard;
