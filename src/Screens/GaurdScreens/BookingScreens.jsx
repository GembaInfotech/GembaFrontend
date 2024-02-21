import React, {useEffect} from 'react'
import { useState } from 'react';

const BookingScreens = () => {
    const [data, setData] =useState([]);
    useEffect(() => {
        const fetchGuardDetails = () => {
          fetch(`http://localhost:7001/v1/api/booking/bookings?parkingId=65d32bed77a295e912a381e4`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              setData(data.data)
              console.log(data);
            })
            .catch(error => {
              console.error('Error fetching guard details:', error);
            });
        };
    
        fetchGuardDetails();
      }, []);
    
  return (
   
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Booking Data</h1>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Time In</th>
                <th className="px-4 py-2">Time Out</th>
                <th className="px-4 py-2">Booking Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item._id}>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">{item.status}</td>
                  <td className="border px-4 py-2">{new Date(item.timeIn).toLocaleString()}</td>
                  <td className="border px-4 py-2">{new Date(item.timeOut).toLocaleString()}</td>
                  <td className="border px-4 py-2">{item.bookingPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    
  )
}

export default BookingScreens