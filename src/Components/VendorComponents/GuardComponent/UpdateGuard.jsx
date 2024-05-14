import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { useParams } from "react-router";
import PulseLoader from "react-spinners/PulseLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchGuardsAsync } from "../../../SliceFolder/GuardSlice/guard";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateGuardAsync } from "../../../SliceFolder/GuardSlice/guard";
import { useNavigate } from "react-router-dom";

const UpdateGuard = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const guard = useSelector((state) => state.Guard);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGuardsAsync({ id }));
  }, []);

  const initialValues = {
    name: guard.data.name || '',
    contact: guard.data.contact || '',
    email: guard.data.email || '',
    address: guard.data.address || '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    contact: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
  });

  const handleSubmit = (GuardData) => {
    // Dispatch update guard action
    console.log(id);
    dispatch(updateGuardAsync({id, GuardData}));
    navigate(`/guard/${id}`)
    dispatch(fetchGuardsAsync({ id }));
  };

  return (
    <div>
      
        <div className="container mx-auto px-16 py-8">
          <div>
            <h1 className="font-light text-xl mb-2 bg-gray-300 rounded-sm p-1">Guard Detail</h1>
            <div className="flex justify-between bg-gray-100 h-[80%]">
              <div className="px-2 py-8">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">
                        Name
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="mob" className="block text-gray-700 text-sm font-bold mb-1">
                        Phone
                      </label>
                      <Field
                        type="text"
                        id="contact"
                        name="contact"
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                      />
                      <ErrorMessage name="contact" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">
                        Email
                      </label>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-1">
                        Address
                      </label>
                      <Field
                        type="text"
                        id="address"
                        name="address"
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                      />
                      <ErrorMessage name="address" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <button
                      type="submit"
                      className="bg-yellow-300 px-2 py-1 rounded-md w-fit text-black font-normal hover:bg-yellow-400 text-sm"
                    >
                      Submit
                    </button>
                  </Form>
                </Formik>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default UpdateGuard;
