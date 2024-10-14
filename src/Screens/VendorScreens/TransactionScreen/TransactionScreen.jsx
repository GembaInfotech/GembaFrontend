import React, { useEffect, useState } from 'react';
import TransactionTable from '../../../Components/TransactionComponents/TransactionTable';
import { parkings } from '../../../SliceFolder/ParkingSlice/Parking';
import PulseLoader from "react-spinners/PulseLoader";
import { useDispatch, useSelector } from 'react-redux';
import { fetchParkingsAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { fetchBookingsAsync } from '../../../SliceFolder/BookingSlice/Booking';

function TransactionScreen() {
  const dispatch = useDispatch();
  const [value, setSelectedParking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // For pagination
  const [limit, setLimit] = useState(10); // Items per page
  const data = useSelector(parkings);
  const bookings = useSelector((state) => state?.booking?.data);
  const status = useSelector((state) => state?.booking?.status);
  const totalCount = bookings?.totalCount; // Get total count from the API

  // Calculate total number of pages
  const totalPages = Math.ceil(totalCount / limit);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchParkingsAsync());
      setLoading(false);
    }
  }, [dispatch]);

  const handleParkingChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedParking(selectedValue);
    const status = "Completed";
    const parkingid = selectedValue;
    dispatch(fetchBookingsAsync({ parkingid, status, page, limit }));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const status = "Completed";
    dispatch(fetchBookingsAsync({ parkingid: value, status, page: newPage, limit }));
  };

  return (
    <div className='px-4 h-full bg-slate-200'>
      <h1 className="text-2xl mb-2 font-bold bg-gray-900 text-gray-100 p-2 text-center">Transactions</h1>
      {loading ? (
        <div className='flex justify-center items-center min-h-screen'>
          <PulseLoader color="#000" />
        </div>
      ) : (
        <div>
          <div className='px-6 py-2 font-bold text-lg'>
            <label htmlFor="parkingDropdown">Select Parking:</label>
            <select
              id="parkingDropdown"
              onChange={handleParkingChange}
              value={value || ''}
              className='bg-slate-200 mx-1 p-2 border border-white rounded-sm'
            >
              <option value="" disabled>Select a parking</option>
              {data?.data?.map((parking, index) => (
                <option key={index} value={parking._id}>
                  {parking.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      {(status === "idle" || status === 'loading') ? (
        <div className='flex justify-center items-center h-[500px]'>
          <PulseLoader color="#000" />
        </div>
      ) : (
        bookings && (
          <>
            <div className="min-h-[540px] mb-4">
              <TransactionTable status={status} booking={bookings} />
            </div>
            <div className='pagination-controls flex justify-center items-center p-4'>
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1} // Disable if on the first page
                className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="mx-4">Page {page} of {totalPages}</span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page >= totalPages} // Disable if on the last page
                className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default TransactionScreen;
