import React from 'react'
import { Link } from "react-router-dom";
import { MdBookmarks } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdAccountBalance } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { IoMan } from "react-icons/io5";

import { LuHelpingHand } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";

import { PiCarProfileFill } from "react-icons/pi";
const SideBar = () => {
  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));

  const parkingid= storedUserData.parkingid;
  return (
    <div className="flex-row ">
        <div className="flex-row px-1 py-4">
          <div  className="m-1 max-w-36 text-sm px-1 py-4   text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/GaurdHome"
              className="text-white font-medium hover:text-gray-500 transition"
            >
         <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <CgProfile/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Profile</h1>
                </div>
            </Link>
          </div>
          <div  className="m-1 max-w-36 text-sm px-1 py-4   text-gray-600 hover:text-gray-800  rounded-sm">
            <Link to={`/associateParking/${parkingid}`}
              
              className="text-white font-medium hover:text-gray-500 transition"
            >
         <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <SlLocationPin/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Parking</h1>
                </div>
            </Link>
          </div>
        
         
      
       <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800 rounded-sm">
         
         <Link
           to="/IncomingBooking"
           className="text-white font-medium hover:text-gray-500 transsition"
         >
           <div className="flex ">
           <h1 className="text-red-800 text-sm py-1 px-2">  <LuHelpingHand/></h1>
             <h1 className="text-red-600 hover:text-red-800 hover:font-bold"> Incoming </h1>
             </div>
         </Link>
       </div>
       <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800 rounded-sm">
         
         <Link
           to="/ParkedBooking"
           className="text-white font-medium hover:text-gray-500 transition"
         >
           <div className="flex ">
           <h1 className="text-green-800 text-sm py-1 px-2">  <LuHelpingHand/></h1>
             <h1 className="text-green-600 hover:text-green-800 hover:font-bold"> Parked </h1>
             </div>
         </Link>
       </div>
       <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800 rounded-sm">
         
         <Link
           to="/CompletedBooking"
           className="text-white font-medium hover:text-gray-500 transition"
         >
           <div className="flex ">
           <h1 className="text-gray-800 text-sm py-1 px-2">  <LuHelpingHand/></h1>
             <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold"> Completed </h1>
             </div>
         </Link>
       </div>
        </div>
      </div>
  )
}

export default SideBar