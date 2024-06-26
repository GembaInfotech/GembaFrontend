import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchParkingByIdAsync, parkingById, updateParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { useParams, useNavigate } from 'react-router-dom';
import ImageUpload from './ImageUpload';
function UpdateParkingForm() {
  const navigate = useNavigate()
  const headers = {
    name: 'Parking Name',
    address_line1: 'Address Line 1',
    address_line2: 'Address Line 2',
    city: 'City',
    state: 'State',
    country: 'Country',
    pincode: 'Pincode',
    registeration_no: 'Registration No.',
    price: 'Price',
    exceed_price: 'Exceed Price',
    price_for: 'Minimum Time(HOURS)',
    exceed_price_for: 'Minimum Exceed Time(MINUTE)',
    sub: 'Subscription',
    subc: 'Subscription Code',
    subamt: 'Subscription Amount',
    landmark: 'Landmark',
    capacity: 'Capacity',
    latitude: 'Latitude',
    longitude: 'Longitude',
    status: 'Current Status',
    description: 'Description'
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => parkingById(state, id));
  console.log(data)
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    dispatch(fetchParkingByIdAsync(id))
    if (data) {
      const keysToInclude = Object.keys(headers);
      const filteredData = Object.fromEntries(
        Object.entries(data)
          .filter(([key]) => keysToInclude.includes(key))
      );
      setUpdatedData(filteredData);
    }
  }, [ dispatch]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const updatedValue = type === 'checkbox' ? e.target.checked : value;
    setUpdatedData({ ...updatedData, [name]: updatedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateParkingAsync({ id, updatedData }));
    navigate("/parkings")

  };
  const nonEditableFields = ['city', 'name', 'landmark','state', 'country', 'address_line1', 'status', 'address_line2', 'pincode', 'registeration_no']; // Replace 'field1', 'field2', etc., with actual field keys

  return (
    <div className='p-4'>
      {!data && <h2>Loading....</h2>}
      {data && (
        <form onSubmit={handleSubmit} className='bg-gray-100 p-4 m-1'>
       {Object.entries(updatedData)
        .filter(([key]) => !nonEditableFields.includes(key))
        .map(([key, value]) => (
          <div className='flex justify-between' key={key}>
            <label className='text-md font-semibold' htmlFor={key}>{headers[key]}</label>
            {key === 'description' ? (
              <textarea
                id={key}
                name={key}
                value={value}
                className='w-[300px] px-2 m-2 py-1 border border-blue-300 shadow-md rounded-md'
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                className='w-[300px] px-2 m-2 py-1 border border-blue-300 shadow-md rounded-md'
                onChange={handleChange}
              />
            )}
          </div>
        ))}
          <button className='bg-yellow-300 px-2 py-1 rounded-md w-fit text-black font-normal hover:bg-yellow-400 text-sm' type="submit">Submit</button>
        </form>
      )}

      <div>
        <ImageUpload id={id}/>
      </div>
    </div>
  );
}

export default UpdateParkingForm;
