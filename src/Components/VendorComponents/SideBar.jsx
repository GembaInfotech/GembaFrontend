import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdAccountBalance } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { LuHelpingHand } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";

const SideBar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="py-4">
        <Link to="/home" className={`flex text-white items-center px-4 py-2 my-1   text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/home' ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <CgProfile className={`mr-2 text-white text-gray-600 ${location.pathname === '/home' ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Profile
        </Link>
        <Link to="/parkings" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/parkings' ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <SlLocationPin className={`mr-2 text-white text-gray-600 ${location.pathname === '/parkings' ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Parkings
        </Link>
        <Link to="/accounts" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/accounts' ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <MdAccountBalance className={`mr-2 text-white text-gray-600 ${location.pathname === '/accounts' ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Accounts
        </Link>
        <Link to="/transactions" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/transactions' ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <FiDatabase className={`mr-2 text-white text-gray-600 ${location.pathname === '/transactions' ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Transactions
        </Link>
        <Link to="/help" className={`flex text-white items-center px-4 py-2 my-1  text-gray-800 font-semibold hover:text-gray-600 ${location.pathname === '/help' ? 'bg-blue-500 rounded-md text-white' : ''}`}>
          <LuHelpingHand className={`mr-2 text-white text-gray-600 ${location.pathname === '/help' ? 'bg-blue-500 rounded-md text-white' : ''}`} />
          Help
        </Link>

        <div onClick={handleLogout} className={`flex text-white items-center px-4 py-2 my-1   text-gray-800 font-semibold hover:text-gray-600 `}>
          <RiLogoutCircleRLine className={`mr-2 text-white text-gray-600`} />
          Logout
        </div>
      </div>
      <div className="p-4">
        {/* You can place additional content here */}
      </div>
      <button
        onClick={toggleCollapse}
        className="block xl:hidden bg-gray-200 text-gray-800 py-2 px-4 text-sm font-semibold uppercase"
      >
        {isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      </button>
    </div>
  );
}

export default SideBar;
