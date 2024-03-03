import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { SlLocationPin } from 'react-icons/sl';
import { MdIncompleteCircle } from "react-icons/md";
import { BiSolidParking } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";


const SideBar = () => {
  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));
  const parkingid = storedUserData?.parkingid;

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="py-4">
      <Link to="/GaurdHome" className={`flex text-white items-center px-4 py-2 my-1   text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/GaurdHome' ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <CgProfile className={`mr-2 text-white text-gray-600 ${location.pathname === '/GaurdHome' ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Profile
        </Link>
        
        <Link to={`/associateParking/${parkingid}`} className={`flex text-white items-center px-4 py-2 my-1   text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === `/associateParking/${parkingid}` ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <SlLocationPin className={`mr-2 text-white text-gray-600 ${location.pathname === `/associateParking/${parkingid}` ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Parkings
        </Link>
        <Link to={`/${parkingid}/IncomingBooking`} className={`flex text-white items-center px-4 py-2 my-1   text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === `/${parkingid}/IncomingBooking` ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <MdIncompleteCircle className={`mr-2 text-white text-gray-600 ${location.pathname === `/${parkingid}/IncomingBooking` ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Incoming
        </Link>
        <Link to={`/${parkingid}/ParkedBooking`} className={`flex text-white items-center px-4 py-2 my-1   text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === `/${parkingid}/ParkedBooking` ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          < BiSolidParking className={`mr-2 text-white text-gray-600 ${location.pathname === `/${parkingid}/ParkedBooking` ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Parked
        </Link>
        <Link to={`/${parkingid}/CompletedBooking`} className={`flex text-white items-center px-4 py-2 my-1   text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === `/${parkingid}/CompletedBooking` ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <FaCircleCheck className={`mr-2 text-white text-gray-600 ${location.pathname === `/${parkingid}/CompletedBooking` ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Completed
        </Link>
        

      </div>
    </div>
  );
};

export default SideBar;
