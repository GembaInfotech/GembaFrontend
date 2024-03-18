import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const SignUp = () => {
  const initialValues = {
    name: '',
    mob: '',
    mail: '',
    add: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    mob: Yup.string().required('Contact is required'),
    mail: Yup.string().email('Invalid email').required('Email is required'),
    add: Yup.string().required('Address is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('https://backend-2-v1ta.onrender.com/v1/api/vendor/register', values);
      if (response.status === 201) {
        toast.success('Signup successful! Please check your email for further instructions.');

        alert('Signup successful! Please check your email for further instructions.');
        resetForm();
      }
      if (response.status === 205) {
        toast.error('Email Already Exists. Please try with another email.');
        resetForm();
      }
    } catch (error) {

      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            {Object.keys(initialValues).map((key) => (
              <div key={key} className="mb-4">
                <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">
                  {key}
                </label>
                <Field tye="text"  name={key} id={key} className="mt-1 p-1 w-full border-gray-300 bg-gray-200 rounded-md" />
                <ErrorMessage name={key} component="div" className="text-red-500 text-sm" />
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
