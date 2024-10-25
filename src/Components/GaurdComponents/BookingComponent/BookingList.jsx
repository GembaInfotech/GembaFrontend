import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";
import { fetchBookingsAsync } from '../../../SliceFolder/BookingSlice/Booking';
import BookingTable from './BookingTable';

const BookingList = ({ parkingid, status }) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Track current page
  const [limit, setLimit] = useState(10); // Number of records per page
  const dispatch = useDispatch();
  const bookings = useSelector(state => state?.booking?.data);

  console.log("bookings", bookings);
  
  
  useEffect(() => {
    const loadBookings = async () => {
      setLoading(true);
      await dispatch(fetchBookingsAsync({ parkingid, status, page, limit }));
      setLoading(false);
    };
    loadBookings();
  }, [dispatch, status, page, limit]); // Trigger when page or limit changes

  const totalPages = Math.ceil(bookings?.totalCount / limit); // Calculate total pages

  return (
    loading ? (
      <div className='flex justify-center items-center min-h-screen'>
        <PulseLoader color="#000" />
      </div>
    ) : (
      <div>
        <BookingTable status={status} booking={bookings?.bookings} />
        <div className="flex justify-center items-center mt-4">
          
          {/* Previous Button */}
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-4 py-2 mx-2 rounded-full flex items-center 
              ${page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 text-white'} 
              transition-colors duration-200 ease-in-out`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          {/* Page Number Display */}
          <span className="px-4 py-2 text-lg">
            Page {page} of {totalPages}
          </span>

          {/* Next Button */}
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page >= totalPages}
            className={`px-4 py-2 mx-2 rounded-full flex items-center 
              ${page >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 text-white'} 
              transition-colors duration-200 ease-in-out`}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default BookingList;
