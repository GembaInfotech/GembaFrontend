
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';




function BookingTable({booking, status}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBooking, setSelectedBooking] = useState(null);

  const openPopup = (booking) => {
    setSelectedBooking(booking);
  };
  const closePopup = () => {
    setSelectedBooking(null);
  };
  const handleSearch = () => {
    // Trigger a fetch when the search button is clicked
    fetchGuardDetails(searchTerm);
    console.log('Search term:', searchTerm);
  };
  const handleClickOutside = (event) => {
    if (selectedBooking && event.target.closest('.bg-white') === null) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },
  [selectedBooking]);
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
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rectangle-full">
          Search
        </button>
      </div>

      <table className="table-auto w-full">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-4 py-2">Serial No.</th>
      <th className="px-4 py-2">Car Number</th>
      <th>Parking Name</th>
      <th className="px-4 py-2">Time In</th>
      <th className="px-4 py-2">Time Out</th>
      <th className="px-4 py-2">Status</th>
      <th className="px-4 py-2">Booking Price</th>
    </tr> 
  </thead>
  <tbody>
    {booking.map((item, index) => (
      <tr key={item._id} onClick={() => openPopup(item)} style={{ cursor: 'pointer' }} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 transition-colors hover:bg-gray-200'}>
        <td className="border px-4 py-2">{index + 1}</td>
        <td className="border px-4 py-2">{item.CarNumber}</td>  
        <td className="border px-4 py-2">{item.ParkingName}</td>  
        <td className="border px-4 py-2">{new Date(item.timeIn).toLocaleString()}</td>
        <td className="border px-4 py-2">{new Date(item.timeOut).toLocaleString()}</td>
        <td className="border px-4 py-2">{item.status}</td>
        { status=="Completed" ?          <td className="border px-4 py-2">{item.bookingPrice+5}</td> :
                <td className="border px-4 py-2">{item.bookingPrice}</td>

}
      </tr>
    ))}
  </tbody>
</table>

{selectedBooking && <Modal status={status} selectedBooking={selectedBooking}/> }
  </div>
  
  )
}
{status=="Parked" && <ParkedPopup selectedBooking={selectedBooking} />
            }
export default BookingTable