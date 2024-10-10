

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/parking.webp';
import img from '../../assets/parking3.jpg';
import img3 from '../../assets/parking.webp';
import img4 from '../../assets/parking5.webp';
import LoginForm from '../../Components/Tools/LoginForm';


const Login = () => {
  const navigate = useNavigate();
 
  useEffect(() => {
   
    const checkToken = async ()=>{
      
    const token = await JSON.parse(localStorage.getItem('token'));
   
    

    }
  checkToken();
    
   
  }, []);

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <div className='h-2/5 md:h-full w-full'>
        <img src={img} alt="Parking App" className="w-full h-full object-cover drop-shadow-md" />
      </div>
      <div className='h-1/2 md:h-full w-full bg-white flex flex-col justify-center items-center'>
        <div>
          <h1 className='text-2xl text-gray-700 font-bold'>Parkar - Your Space Partner</h1>
        </div>
        <div className='flex flex-col items-center justify-start'>
          <LoginForm />
        </div>
      </div>
    </div>

  );
};

export default Login;
