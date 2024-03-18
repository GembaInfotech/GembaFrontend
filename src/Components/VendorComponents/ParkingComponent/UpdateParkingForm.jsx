import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parkingById, updateParkingAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { useParams } from 'react-router';
function UpdateParkingForm() {
  const headers = {
    pn: 'Parking Name',
    pa: 'Location',
    city: 'City',
    st: 'State',
    country: 'Country',
    pc: 'Pincode',
    ln: 'Licence No.',
    sc: 'State code',
    price: 'Price',
    ep: 'Exceed Price',
    mt: 'Minimum Time',
    met: 'Minimum Exceed Time',
    sub: "Subscription",
    subc: "Subscription Code",
    subamt: "Subscription Amount",
    lm: 'LandMark',
    cc: 'Capacity',
    latiude: 'Latitude',
    longitude: 'Longitude',
    currentstatus: 'currentstatus',
    description: 'description'


  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => parkingById(state, id));
  const [updatedData, setFormData] = useState({});

  useEffect(() => {
    if (data) {
      const keysToExclude = ['_id', '__v', 'lc'];
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => !keysToExclude.includes(key))
      );
      setFormData(filteredData);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...updatedData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateParkingAsync({ id, updatedData }));

  };

  return (
    <div className='p-4'>
      {data && (
        <form onSubmit={handleSubmit} className='bg-gray-100 p-4 m-1'>
          {Object.entries(updatedData).map(([key, value]) =>
          (

            <div className='flex justify-between' key={key}>
              <label htmlFor={key}>{headers[key]}</label>
              <input
                type="text"
                id={key}
                name={key}
                value={value} className='w-[300px] px-2 m-2 py-1'
                onChange={handleChange}
              />
            </div>
          ))}
          <button className='bg-yellow-300 px-2  py-1 rounded-md w-fit text-black font-normal hover:bg-yellow-400 text-sm ' type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default UpdateParkingForm;
