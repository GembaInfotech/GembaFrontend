
import React, { Children } from 'react'
import GLandingScreen from '../Screens/GaurdScreens/ProfileScreen/GLandingScreen';
function GLayout({children}) {
  return (
    <>
   
  
<div className='flex min-h-screen  bg-[#fff]'>
  <div className='w-1/6 px-4 py-2 bg-gray-800 '>
    <GLandingScreen/>
  </div>
  <div className='w-5/6  max-h-screen overflow-y-scroll'>
    {children}
  </div>
</div>



    </>
   
  )
}

export default GLayout;
