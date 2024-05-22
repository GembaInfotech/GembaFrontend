import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PulseLoader from "react-spinners/PulseLoader";
import axios from 'axios';
import { MdHome } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { BiX, BiHide, BiShowAlt } from 'react-icons/bi';


const SignupSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate= useNavigate();

  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage('');
      }, 1000); 
    }
    return () => clearTimeout(timer);
  }, [errorMessage]);
  const initialValues = {
    email: '',
    password: ''
  };

  function validateEmail(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  }

  const handleSubmit = async (values) => {
    console.log("hello");
setLoading(true);  
  try {
      if (!validateEmail(values.email)) {
        console.log("hello3");
        throw new Error('Enter valid email');
      } else if (values.password.length < 3) {
        console.log("hello4");
        throw new Error('Enter valid password');
      }
      console.log("hello5");
      console.log(values);
      const response = await axios.post('/api/vendor/vendor-login', values);
      console.log("hello2 ");
      console.log(response.data.accessToken
      );
      if (response.status === 200) {
        console.log(response.data.vendor);
        const responseData = response.data;
        if (responseData) {
          console.log(responseData.accessToken);
          localStorage.setItem('token', JSON.stringify(responseData.accessToken));
          navigate('/home')

        } else {
          throw new Error('No data received from server');
        }
      } else {
        throw new Error('Unexpected error occurred');
      }
    } catch (error) {
      setLoading(false);
      let errorMessage = 'An error occurred.';

      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Invalid password.';
        } else if (error.response.status === 404) {
          errorMessage = 'User not found.';
        } else if (error.response.status === 500) {
          errorMessage = 'Failed to update user.';
        }
      }
      setErrorMessage(errorMessage);
    }
  };

  return (
  
    
        <div className="w-full bg-white rounded-lg shadow-xl  sm:max-w-md xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-sm font-bold leading-tight tracking-tight text-gray-600 md:text-sm dark:text-gray-600">
              Sign in to your account
            </h1>
            <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
              <Form className="space-y-4 md:space-y-2">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                    Your email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-100 font-semibold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-100 font-bold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 pr-12 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (<BiHide />) : (<BiShowAlt />)}
                    </button>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                </div>
                <button
                  type="submit"
                  className={`      w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-1 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                >
                  {          errorMessage ?  <div> <p className='text-red-500 bg-red-200 px-2 rounded-md'> {errorMessage}</p>
          </div> :loading ?        <PulseLoader size={"8px"}  color="#fff" />
       : <h1>Login</h1>}
                </button>
                <p className="text-sm font-medium text-gray-600">
                  Don’t have an account yet?{' '}
                  <Link to="/sign-up" className="font-medium text-blue-700 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </Form>
            </Formik>
          </div>
      
   
    </div>
  );
};

export default LoginForm;
