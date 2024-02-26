import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { SlLocationPin } from 'react-icons/sl';
import { LuHelpingHand } from 'react-icons/lu';

const SideBar = () => {
  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));
  const parkingid = storedUserData?.parkingid;

  return (
    <div className="flex-row">
      <div className="flex-row px-1 py-4">
        <div className="m-1 max-w-36 text-lg px-1 py-4 text-gray-600 hover:text-gray-800 rounded-sm">
          <Link to="/GaurdHome" className="text-white font-medium hover:text-gray-500 transition">
            <div className="flex">
              <h1 className="text-gray-800 text-lg py-1 px-2"><CgProfile /></h1>
              <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">Profile</h1>
            </div>
          </Link>
        </div>
        <div className="m-1 max-w-36 text-lg px-1 py-4 text-gray-600 hover:text-gray-800 rounded-sm">
          <Link to={`/associateParking/${parkingid}`} className="text-white font-medium hover:text-gray-500 transition">
            <div className="flex">
              <h1 className="text-gray-800 text-lg py-1 px-2"><SlLocationPin /></h1>
              <h1 className="text-gray-600 hover:text-gray-800 hover:font-bold">Parking</h1>
            </div>
          </Link>
        </div>

        <div className="m-1 text-lg px-1 max- py-4 w-36 text-gray-600 hover:text-gray-800 rounded-sm">
          <Link to={`/${parkingid}/IncomingBooking`} className="text-white font-medium hover:text-gray-500 transition">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
</svg>

              <h1 className="text-red-600 hover:text-red-800 hover:font-bold">Incoming</h1>
            </div>
          </Link>
        </div>

        <div className="m-1 text-lg px-1 max- py-4 w-36 text-amber-400 hover:text-amber-500 rounded-sm">
          <Link to={`/${parkingid}/ParkedBooking`} className="text-white font-medium hover:text-amber-500 transition">
            <div className="flex">
              
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-6 h-6 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

              <h1 className="text-amber-400 hover:text-amber-400 hover:font-bold">Parked</h1>
            </div>
          </Link>
        </div>

        <div className="m-1 text-lg px-1 max- py-4 w-36  text-green-500 hover:text-green-400 rounded-sm">
         
         <Link
           to={`/${parkingid}/CompletedBooking`}
           className="text-white font-medium hover:text-green-400 transition"
         >
           <div className="flex ">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>

             <h1 className="text-green-500 hover:text-green-500 hover:font-bold"> Completed </h1>
             </div>
         </Link>
       </div>
      </div>
    </div>
  );
};

export default SideBar;
