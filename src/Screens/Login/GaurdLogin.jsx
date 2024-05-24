import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from 'react-router';
import img from '../../assets/parking3.jpg'
// import { Link } from 'react-router-dom';
import axios from 'axios';


const SignupSchema = Yup.object().shape({
  email: Yup.string().required('Required'), // Corrected field name to 'email'
  password: Yup.string().required('Required'),
});

const GaurdLogin = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = async (values) => {
    // console.log("login guard");
    setLoading(true);

    try {
      const response = await axios.post('/v1/api/guard/guard-login', values);
      if (response)
        {
          localStorage.setItem('gaurdData', JSON.stringify(response.data));
          navigate("/GaurdHome")
        }
    } catch (error) {
      // Handle error
      console.error('Error saving data:', error);
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <div className='flex'>
    <div className=' max-md:w-full h-screen'>
     
      <img src={img} alt="Parking App" className="w-full h-screen object-cover drop-shadow-md "></img>
    </div>
    <div className='w-1/2 bg-white  flex flex-col justify-evenly items-center max-md:w-full bg-blue-300'>
<div>
<h1 className='text-2xl text-gray-700 font-bold '>Parkar- your space Partner</h1>
</div>     
<div className='flex flex-col items-center justify-start'>

          <div className="max-w-md w-full bg-white rounded-lg shadow-md md:max-w-md">
            <div className="p-6 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-gray-600">
                Sign in to your account
              </h1>
              <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 ">
                      Your mail
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-100 font-semibold  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@gmail.com"
                      required
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium  text-gray-600">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-100 font-bold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <button
                    type="submit" // Ensure this button triggers form submission
                    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {loading ? <PulseLoader color="#fff" />
                      : <h1>Login</h1>}
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

export default GaurdLogin;


  
