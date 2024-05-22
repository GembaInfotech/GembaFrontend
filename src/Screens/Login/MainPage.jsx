import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../src/assets/parking3.jpg'
const MainPage = () => {
  return (
   <div className='flex'>
        <div className=' max-md:w-full h-screen'>
         
          <img src={img} alt="Parking App" className="w-full h-screen object-cover drop-shadow-md "></img>
        </div>
        <div className='w-1/2 bg-white  flex flex-col justify-evenly items-center max-md:w-full'>
<div>
<h1 className='text-2xl text-gray-700 font-bold '>Parkar- your space Partner</h1>
</div>     
    <div className='flex flex-col items-center justify-start'>
         <Link to='/login/auth/guard' className='my-2'>
            <button className='bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Login as a Guard
            </button>
          </Link>
          <Link to='/login/auth/vendor' className='my-2'>
            <button className='bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Login as a Vendor
            </button>
          </Link>
         </div>

          
        </div>
      </div>
    
  )
}

export default MainPage