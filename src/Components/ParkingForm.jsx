import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const initialFormData = {
  parkingName: '',
  parkingArea: '',
  city: '',
  state: '',
  country: '',
  pincode: '',
  landmark: '',
  capacity: '',
  openingTime: '',
  closingTime: '',
  latitude: '',
  longitude: ''
};

const ParkingForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
const id = storedUserData?._id;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:7001/v1/api/parking/createparking/${id}`,
        formData
      );

      console.log('parking saved:', response);
      toast.success('Information Saved Successfully');

    } catch (error) {
      console.error('Error updating guard:', error);
    }
    console.log(formData);
  };

  return (
   <div>
     <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 mt-10 rounded-lg shadow-lg">
      {Object.keys(formData).map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={fieldName}>
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={fieldName}
            type="text"
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </form>
    <ToastContainer/>
   </div>
  );
};

export default ParkingForm;
