
import React, { Children } from 'react'
import LandingScreen from '../Screens/Login/LandingScreen';
function Layout({children}) {
  return (
    <>
   
   <div className='flex min-h-screen  bg-[#fff]'>
  <div className='w-1/6 px-4 py-2 bg-gray-800 '>
    <LandingScreen/>
  </div>
  <div className='w-5/6  max-h-screen overflow-y-scroll'>
    {children}
  </div>
</div>

    </>
   
  )
}

export default Layout;
