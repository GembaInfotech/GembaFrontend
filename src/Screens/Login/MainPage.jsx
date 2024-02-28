import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../src/assets/parkingg.png'
const MainPage = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='flex flex-row w-10/12 bg-white shadow-lg rounded-lg overflow-hidden '>
        <div className='w-1/2 bg-gray-200 p-8'>
          {/* Left Side Content (Placeholder for Image or Illustration) */}

          {/* <h2 className='text-2xl  font-bold mb-4'>Welcome to our Parking Application</h2>
          <p className='text-gray-600'>Find the perfect spot for your vehicle with ease. Whether you're heading to work, running errands, or meeting friends, our app makes parking stress-free.</p> */}
           
          <img src={img} alt="Parking App" className="w-full h-full object-cover drop-shadow-md "></img>
        </div>
        <div className='w-1/2 bg-white p-8 flex flex-col justify-center items-center'>
          {/* Right Side Content (Login Options) */}
          <Link to='/login/auth/guard' className='my-4'>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Login as a Guard
            </button>
          </Link>
          <Link to='/login/auth/vendor' className='my-4'>
            <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Login as a Vendor
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage