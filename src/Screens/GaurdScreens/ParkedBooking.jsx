import React, { useEffect, useState } from 'react';
import ReactToPrint from "react-to-print";
import moment from "moment";
import { Link } from "react-router-dom";

const CompletedBooking = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [exceedPrice, setExceedPrice] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const fetchGuardDetails = (carNumber) => {
    // Use the search term in the API request if it is provided
    const apiUrl = carNumber
      ? `http://localhost:7001/v1/api/booking/bookings/?parkingId=65d32bed77a295e912a381e4&status=Parked&CarNumber=${carNumber}`
      : 'http://localhost:7001/v1/api/booking/bookings/?parkingId=65d32bed77a295e912a381e4&status=Parked';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching guard details:', error);
      });
  };

  useEffect(() => {
    fetchGuardDetails();
  }, [searchTerm]);

  const handleSearch = () => {
    // Trigger a fetch when the search button is clicked
    fetchGuardDetails(searchTerm);
    console.log('Search term:', searchTerm);
  };

  const openPopup = (booking) => {
    setSelectedBooking(booking);
  };

  const closePopup = () => {
    setSelectedBooking(null);
    const requestData={
      Status: "Completed"
    }
    const apiUrl = 
        `http://localhost:7001/v1/api/booking/update/${selectedBooking._id}`
    setShowReceipt(false); 
    const fetchOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      body: JSON.stringify(requestData),
    };
    
    // Perform the PUT request
    fetch(apiUrl, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error updating booking details:', error);
      });
      window.location.href="/ParkedBooking"
};

  const collectReceipt = () => {
    setShowReceipt(true);
    // You can print the receipt data here
    console.log('Receipt Data:', selectedBooking);
  };

  const calculateExceedTime = (checkoutTime) => {
    const currentTime = Date.now();
  
    if (!checkoutTime || isNaN(new Date(checkoutTime).getTime())) {
      // Handle invalid or missing checkoutTime
      console.error('Invalid checkoutTime:', checkoutTime);
      return { days: 0, hours: 0, minutes: 0 };
    }
  
    const exceedTimeInMillis = Math.max(0, currentTime - new Date(checkoutTime).getTime());
  
    // Convert milliseconds to hours, minutes, and days
    const days = Math.floor(exceedTimeInMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((exceedTimeInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((exceedTimeInMillis % (1000 * 60 * 60)) / (1000 * 60));
  
    return { days, hours, minutes };
  };
  

  
  
  

  return (
    <div className="container mx-auto">
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Search by vehicle number"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-2 border mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-full">
          Search
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Booking Data</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Time In</th>
            <th className="px-4 py-2">Time Out</th>
            <th className="px-4 py-2">Booking Price</th>
            <th className="px-4 py-2">Car Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id} onClick={() => openPopup(item)} style={{ cursor: 'pointer' }}>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">{item.status}</td>
              <td className="border px-4 py-2">{new Date(item.timeIn).toLocaleString()}</td>
              <td className="border px-4 py-2">{new Date(item.timeOut).toLocaleString()}</td>
              <td className="border px-4 py-2">{item.bookingPrice}</td>
              <td className="border px-4 py-2">{item.CarNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBooking && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
      <h2 className="text-lg font-bold mb-4">Booking Details</h2>
      <p>ID: {selectedBooking._id}</p>
      <p>Status: {selectedBooking.status}</p>
      <p>Time In: {new Date(selectedBooking.timeIn).toLocaleString()}</p>
      <p>Time Out: {new Date(selectedBooking.timeOut).toLocaleString()}</p>
      <p>Booking Price: {selectedBooking.bookingPrice}</p>
      <p>Car Number: {selectedBooking.CarNumber}</p>

      {/* Exceed Time calculation */}
      <p>
     {/* Exceed Time calculation */}
     Exceed Time:
{calculateExceedTime(selectedBooking.timeOut).days > 0 && (
  <span>
    {calculateExceedTime(selectedBooking.timeOut).days} days{' '}
  </span>
)}
{calculateExceedTime(selectedBooking.timeOut).hours > 0 && (
  <span>
    {calculateExceedTime(selectedBooking.timeOut).hours} hours{' '}
  </span>
)}
{calculateExceedTime(selectedBooking.timeOut).minutes > 0 && (
  <span>
    {calculateExceedTime(selectedBooking.timeOut).minutes} minutes
  </span>
)}
{calculateExceedTime(selectedBooking.timeOut).minutes > 8 && (
  <span className="text-red-500"> (Exceed Price)</span>
)}

        
      </p>

      
      <Link
  to={{
    pathname: `/generatee/${encodeURIComponent(JSON.stringify(selectedBooking))}`,
    state: { selectedBooking },
  }}
>
  <button className="bg-green-500 text-white p-2 rounded-full mt-4 hover:bg-green-700 mr-2">
    Collect
  </button>
</Link>

            <button
              onClick={closePopup}
              className="bg-blue-500 text-white p-2 rounded-full mt-4 hover:bg-blue-700"
            >
              Close
            </button>
    </div>
  </div>
)}

  </div>
  );
};

export default CompletedBooking;
