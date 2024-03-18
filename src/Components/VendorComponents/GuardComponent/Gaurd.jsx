import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Gaurd = () => {
  const { parkingId } = useParams();
  const initialValues = {
    name: '',
    mail: '',
    password: '',
    adhar: '',
    mob: '',
    add: '',
    image: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    mail: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    adhar: Yup.string().required('Aadhar number is required'),
    mob: Yup.number().required('Contact number is required'),
    add: Yup.string().required('Address is required'),
    image: Yup.string().url('Invalid URL')
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        `http://localhost:7001/v1/api/guard/register/${parkingId}`,
        values
      );
      toast.success('Added Successfully.');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="bg-[#ffffff] shadow-xl border border-gray-300 rounded-sm w-full duration-300 ease-in-out overflow-hidden p-12" style={{ height: "80vh" }}>
          <div className="mb-8 grid grid-cols-3 gap-6">
            {Object.keys(initialValues).map((key, index) => (
              <div key={index} className="relative h-10 w-full">
                <Field type={key === 'password' ? 'password' : 'text'} id={key} name={key} className="peer h-full w-full bg-slate-50 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                <label htmlFor={key} className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white py-1 px-2 rounded-sm mx-2 hover:bg-blue-600 focus:outline-none">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>


  );
};

export default Gaurd;
