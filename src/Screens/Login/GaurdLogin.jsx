import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';


const SignupSchema = Yup.object().shape({
  mail: Yup.string().mail('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const GaurdLogin
 = () => {



  

  const initialValues = {
    mail: '',
    password: ''
  };

  const handleSubmit = async (values) => {
    try {
      // Make a POST request to your API endpoint with form data
   

      const response = await axios.post('http://localhost:7001/v1/api/guard/login', values);

 
      console.log('Data saved successfully:', response);
if(response.data.data)
      localStorage.setItem('gaurdData', JSON.stringify(response.data.data)); // Store user data in local storage
    } catch (error) {
      // Handle error
      console.error('Error saving data:', error);
    }
    window.location.href="/GaurdHome"
  };
  return (
    <div className="flex flex-row justify-center items-center bg-white">
      
    
    <div className='flex-row mx-auto h-screen  '>
   
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md md:max-w-md">
        <div className="p-6 md:space-y-6 sm:p-8">
           <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-gray-600">
             Sign in to your account
           </h1>
           <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
             <Form className="space-y-4 md:space-y-6">
               <div>
                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 ">
                   Your email
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
               <div className="flex items-center justify-between">
                 <div className="flex items-start">
                   <div className="flex items-center h-5">
                     <Field
                       type="checkbox"
                       id="remember"
                       name="remember"
                       className="w-4 h-4 border font-semibold border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                     />
                   </div>
                   <div className="ml-3 text-sm">
                     <label htmlFor="remember" className="text-blue-600 ">
                       Remember me
                     </label>
                   </div>
                 </div>
                 <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                   Forgot password?
                 </a>
               </div>
               <button
                 type="submit"
                 className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
               >
                 Sign in
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

export default GaurdLogin
;
