

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
    if(token)
    window.location.href = "/Home"

    }
  checkToken();
    
   
  }, []);

  return (
    <div className='flex'>
    <div className=' max-md:w-full h-screen'>
     
      <img src={img} alt="Parking App" className="w-full h-screen object-cover drop-shadow-md "></img>
    </div>
    <div className='w-1/2 bg-white  flex flex-col justify-evenly items-center max-md:w-full '>
<div>
<h1 className='text-2xl text-gray-700 font-bold '>Parkar- your space Partner</h1>
</div>     
<div className='flex flex-col items-center justify-start'>
    <LoginForm/>
     </div>

      
    </div>
  </div>
  );
};

export default Login;
