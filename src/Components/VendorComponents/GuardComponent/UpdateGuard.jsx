import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { updateGuardAsync } from "../../../SliceFolder/GuardSlice/guard";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5"; // Import the close icon

const UpdateGuard = ({ closeModal, guard }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: guard.name || '',
    contact: guard.contact || '',
    email: guard.email || '',
    address: guard.address || '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    contact: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
  });

  const handleSubmit = (GuardData) => {
    dispatch(updateGuardAsync({ id: guard._id, GuardData }));
    closeModal();
    navigate(`/guard/${guard._id}`);
  };

  return (
    <div className="max-w-md w-full  bg-white p-8 rounded-lg shadow-md relative">
      <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
        <IoClose size={24} />
      </button>
      <div>
        <h2 className="text-center text-2xl font-extrabold text-gray-700">Update Guard Details</h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
              <Field
                type="text"
                id="contact"
                name="contact"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
              <ErrorMessage name="contact" component="div" className="text-red-500 text-xs mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <Field
                type="text"
                id="email"
                name="email"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">Address</label>
              <Field
                type="text"
                id="address"
                name="address"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
              <ErrorMessage name="address" component="div" className="text-red-500 text-xs mt-1" />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateGuard;
