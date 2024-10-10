import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdAccountBalance } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { LuHelpingHand } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { MdCancelScheduleSend } from "react-icons/md";
import { FaCar } from "react-icons/fa";

import {vendorLogoutAsync} from "../../SliceFolder/VendorSlice/Vendor"
// import { useDispatch } from 'react-redux';


const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLoggingOut, setisLoggingOut] = useState(false);

  // const dispatch = useDispatch();


  const handleLogout =  async () => {
     setisLoggingOut(true);
     await dispatch( vendorLogoutAsync())
     console.log("here")
    localStorage.removeItem('token');
    
   window.location.href = '/';
  };

  return (
   
    <div className="flex flex-col h-full justify-between">
       {isLoggingOut && (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 text-white">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
        <p className="text-xl">Logging out...</p>
      </div>
    )}
      <div className="py-4">
        <Link to="/Home" className={`flex text-white items-center px-4 py-2 my-1   text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/home' ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <CgProfile className={`mr-2 text-white text-gray-600 ${location.pathname === '/home' ? 'bg-slate-500 rounded-md text-white' : ''}`} />
          Profile
        </Link>
        <Link to="/parkings" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/parkings' ? 'bg-slate-500 rounded-md text-white' : ''}`}>
          <SlLocationPin className={`mr-2 text-white text-gray-600 ${location.pathname === '/parkings' ? 'bg-slate-500 rounded-md text-white' : ''}`} />
          Parkings
        </Link>
        {/* <Link to="/accounts" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/accounts' ? 'bg-slate-500 rounded-md text-white' : ''}`}>
          <MdAccountBalance className={`mr-2 text-white text-gray-600 ${location.pathname === '/accounts' ? 'bg-slate-500 rounded-md text-white' : ''}`} />
          Accounts
        </Link> */}
        <Link to="/Cancelled" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/Cancelled' ? 'bg-slate-500 rounded-md text-white' : ''}`}>
          <MdCancelScheduleSend className={`mr-2 text-white text-gray-600 ${location.pathname === '/Cancelled' ? 'bg-slate-500 rounded-md text-white' : ''}`} />
          Cancelled Bookings
        </Link>
        <Link to="/transactions" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/transactions' ? 'bg-slate-500 rounded-md text-white' : ''}`}>
          <FiDatabase className={`mr-2 text-white text-gray-600 ${location.pathname === '/transactions' ? 'bg-slate-500 rounded-md text-white' : ''}`} />
          Transactions
        </Link>
        <Link to="/parkingSpace" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/parkingSpace' ? 'bg-slate-500 rounded-md text-white' : ''}`}>
          <FaCar className={`mr-2 text-white text-gray-600 ${location.pathname === '/parkingSpace' ? 'bg-slate-500 rounded-md text-white' : ''}`} />
          Parking Space
        </Link>
        <Link to="/help" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/help' ? 'bg-slate-500 rounded-md text-white' : ''}`}>
          <LuHelpingHand className={`mr-2 text-white text-gray-600 ${location.pathname === '/help' ? 'bg-slate-500 rounded-md text-white' : ''}`} />
          Help
        </Link>

        <div onClick={handleLogout} className={`flex text-white items-center px-4 py-2 my-1   text-gray-800 font-semibold hover:text-gray-600 `}>
          <RiLogoutCircleRLine className={`mr-2 text-white text-gray-600`} />
           <button>Logout</button>
        </div>
      </div>
      <div className="p-4">
        {/* You can place additional content here */}
      </div>
    </div>
  );
}

export default SideBar;
