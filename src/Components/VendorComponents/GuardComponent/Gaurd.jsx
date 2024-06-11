import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoClose } from 'react-icons/io5';

const Guard = ({ id, closeModal}) => { // Accept closeModal prop
  const navigate = useNavigate();
  // const { parkingId } = useParams();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    contact: '',
    address: '',
    image: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    contact: Yup.number().required('Contact number is required'),
    address: Yup.string().required('Address is required'),
    image: Yup.string().url('Invalid URL')
  });

  const onSubmit = async (values) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.post(
        `/v1/api/guard/create-new-guard/${id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data) {
        toast.success(response.data.message || 'Added Successfully.');
        closeModal()
      } else {
        toast.success('Added Successfully.');
        closeModal()
      }
      navigate(`/parking/${parkingId}`);
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'Failed to add guard.');
      } else {
        toast.error('Failed to add guard.');
      }
    }
  };

  const handleCloseModal = () => {
    closeModal(); // Call the closeModal function passed from ParkingCard component
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  ">
      <div className="relative bg-white shadow-xl border border-gray-300 rounded-lg p-8 max-w-lg w-full">
        <button
          onClick={handleCloseModal} // Close modal when cross button is clicked
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <IoClose size={24} />
        </button>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6">
            {Object.keys(initialValues).map((key, index) => (
              <div key={index} className="flex flex-col">
                <label htmlFor={key} className="text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <Field
                  type={key === 'password' ? 'password' : 'text'}
                  id={key}
                  name={key}
                  className="rounded-md border border-gray-300 px-3 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name={key} component="div" className="text-red-500 text-sm mt-1" />
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Guard;
