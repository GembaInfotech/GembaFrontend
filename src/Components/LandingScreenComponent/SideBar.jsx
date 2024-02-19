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
  return (
    <div className="flex-row ">
        <div className="flex-row px-1 py-4">
          <div  className="m-1 max-w-36 text-sm px-1 py-4   text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/home"
              className="text-white font-medium hover:text-gray-500 transition"
            >
         <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <CgProfile/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Profile</h1>
                </div>
            </Link>
          </div>
          <div  className="m-1 max-w-36 text-sm px-1 py-4   text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/parkings"
              className="text-white font-medium hover:text-gray-500 transition"
            >
         <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <SlLocationPin/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Parkings</h1>
                </div>
            </Link>
          </div>
          <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800  rounded-sm">
            <Link
              to="/gaurds"
              className="text-white font-medium hover:text-gray-500 transition"
            >
                <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <IoMan/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Gaurds</h1>
                </div>
            </Link>
          </div>
          <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800 rounded-sm">
         
            <Link
              to="/accounts"
              className="text-white font-medium hover:text-gray-500 transition"
            >
              <div className="flex ">
              <h1 className="text-gray-800 text-sm py-1 px-2">  <MdAccountBalance/></h1>
                <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Accounts</h1>
                </div>
            </Link>
          </div>
          <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800 rounded-sm">
         
         <Link
           to="/transactions"
           className="text-white font-medium hover:text-gray-500 transition"
         >
           <div className="flex ">
           <h1 className="text-gray-800 text-sm py-1 px-2">  <FiDatabase/></h1>
             <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  Transactions</h1>
             </div>
         </Link>
       </div>
          <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800 rounded-sm">
         
         <Link
           to="/help"
           className="text-white font-medium hover:text-gray-500 transition"
         >
           <div className="flex ">
           <h1 className="text-gray-800 text-sm py-1 px-2">  <LuHelpingHand/></h1>
             <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold"> Help </h1>
             </div>
         </Link>
       </div>
       <div className="m-1 text-sm px-1 max- py-4 w-36  text-gray-600 hover:text-gray-800 rounded-sm">
         
         <Link
           to="/vendorHome"
           className="text-white font-medium hover:text-gray-500 transition"
         >
           <div className="flex ">
           <h1 className="text-gray-800 text-sm py-1 px-2">  <FiDatabase/></h1>
             <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">  VendorSite</h1>
             </div>
         </Link>
       </div>
        </div>
      </div>
  )
}

export default SideBar