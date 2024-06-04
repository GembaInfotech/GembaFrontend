import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {upcomingBookingIn15minAsync} from '../../../SliceFolder/BookingSlice/Booking';
import { useParams } from 'react-router-dom';

function IncomingBookingListIn15min() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const dispacth = useDispatch();
    const parkingid = useParams()
    
    const upcommingBookings = useSelector((state)=>state?.booking?.data)
    console.log(upcommingBookings);

    useEffect(()=>{
        dispacth(upcomingBookingIn15minAsync(parkingid))
        setFilteredBookings(upcommingBookings);
    },[dispacth])

    const openPopup = (booking) => {
        setSelectedBooking(booking);
    };

    const closePopup = () => {
        setSelectedBooking(null);
    };

    const handleSearch = (term) => {
        const filtered = upcommingBookings.filter(item =>
            item.vehicle_number.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredBookings(filtered);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        handleSearch(value);
    };

    return (
        <div className="container mx-auto">
            <div className="mb-4 flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Search by vehicle number"
                    value={searchTerm}
                    onChange={handleChange}
                    className="p-2 border rounded-md mr-2 mt-4 bg-slate-100"
                />
            </div>

            <table className="table-auto w-full">
                <thead className="bg-gray-800">
                    <tr>
                        <th className="px-1 text-white py-2 text-sm">Serial No.</th>
                        <th className="px-2 text-white py-2 text-sm">Vehicle Number</th>
                        <th className="px-2 text-white py-2 text-sm">Vehicle Model</th>
                        <th className="px-2 text-white py-2 text-sm">Parking Name</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBookings?.map((item, index) => (
                        <tr key={item.id} onClick={() => openPopup(item)} style={{ cursor: 'pointer' }} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 transition-colors hover:bg-gray-200'}>
                            <td className="border text-center px-1 text-sm py-2">{index + 1}</td>
                            <td className="border text-center px-2 text-sm py-2">{item.vehicle_number}</td>
                            <td className="border text-center px-2 text-sm py-2">{item.vehicle_name}</td>
                            <td className="border text-center px-2 text-sm py-2">{item.parkingName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedBooking && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded">
                        <h2 className="text-xl mb-4">Booking Details</h2>
                        <p>Vehicle Number: {selectedBooking.vehicle_number}</p>
                        <p>Vehicle Model: {selectedBooking.vehicle_name}</p>
                        <p>Parking Name: {selectedBooking.parkingName}</p>
                        <button onClick={closePopup} className="mt-4 bg-blue-500 text-white p-2 rounded">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IncomingBookingListIn15min;