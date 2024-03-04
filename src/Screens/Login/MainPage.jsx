import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../src/assets/parkingg.png'
const MainPage = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='flex flex-row  bg-white shadow-lg rounded-lg overflow-hidden '>
        <div className='w-3/4 bg-gray-200 p-16'>
         
          <img src={img} alt="Parking App" className="w-full h-full object-cover drop-shadow-md "></img>
        </div>
        <div className='w-1/2 bg-white p-8 flex flex-col justify-center items-center'>
          <Link to='/login/auth/guard' className='my-4'>
            <button className='bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Login as a Guard
            </button>
          </Link>
          <Link to='/login/auth/vendor' className='my-4'>
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