import { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {  vendorDataAsync, vendorUpdateAsync } from './../../SliceFolder/VendorSlice/Vendor';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function VendorProfileComponent() {
 
  const dispatch= useDispatch();
  const vendor = useSelector((state) => state.Vendor);
  const [data, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (vendor) {
      const keysToExclude = ['_id', '__v'];
      const filteredData = Object.fromEntries(
        Object.entries(vendor.data).filter(([key, value]) => !keysToExclude.includes(key))
      );
      setFormData(filteredData);
  
    }
  }, [vendor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(vendorUpdateAsync({ data}));
    toast.success('Vendor details updated successfully');
    navigate('/home')
    dispatch(vendorDataAsync());
    setFormData( '');

  };

  const fieldLabels = {
    name: 'Name',
    mob: 'Phone',
    mail: 'Email',
    add: 'Address',
    // Add more fields as neede
  };

  return (
    <div className='p-4'>
      {vendor && (
        <form onSubmit={handleSubmit} className='bg-gray-100 p-4 m-1'>
          {Object.entries(data).map(([key, value]) =>
           (
            <div className='flex justify-between' key={key}>
              <label htmlFor={key}>{fieldLabels[key]}</label>
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                className='w-[300px] px-2 m-2 py-1'
                onChange={handleChange}
              />
            </div>
          ))}
          <button className='bg-yellow-300 px-2  py-1 rounded-md w-fit text-black font-normal hover:bg-yellow-400 text-sm ' type="submit">Submit</button>
        </form>
      )}
      <ToastContainer/>
    </div>
  );
}

export default VendorProfileComponent;
