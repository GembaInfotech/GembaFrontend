import { useEffect, useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

function BookingTable({ booking, status }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        setFilteredBookings(booking);
    }, [booking]);

    const openPopup = (booking) => {
        setSelectedBooking(booking);
    };

    const closePopup = () => {
        setSelectedBooking(null);
    };

    const handleSearch = (searchTerm) => {
        const filtered = booking.filter(item =>
            item.vehicle_number.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBookings(filtered);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        handleSearch(value);
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
    }, [selectedBooking, booking]);

    return (
        <div className="container mx-auto bg-slate-200 h-full">
            <div className="mb-4 flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Search by vehicle number"
                    value={searchTerm}
                    onChange={handleChange}
                    className="p-2 border rounded-md mr-2 mt-4 bg-slate-100"
                />
                <button
                    className="bg-slate-300 text-black py-2 px-3 rounded-md mt-4 "
                    disabled
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            <table className="table-auto w-full ">
                <thead className="bg-gray-800">
                    <tr>
                        <th className="px-1 text-white py-2"><p className='text-sm'>Booking ID</p></th>
                        <th className="px-2 text-white text-sm py-2 text-sm">Vehicle Number</th>
                        <th className="px-2 text-white text-sm py-2">Vehicle Model</th>
                        <th className="px-2 text-white text-sm py-2">Vehicle Type</th>

                        <th className="px-2 text-white text-sm py-2">Parking Name</th>
                        {status !== "Confirmed" || status !== "Cancelled" && <th className="px-2 text-white text-sm py-2">Parking Space</th>}
                        {status == "Cancelled" && <th className="px-2 text-white text-sm py-2">Refund ID</th>}

                        <th className="px-2 text-white text-sm py-2">Time In</th>
                        <th className="px-2 text-white text-sm py-2">Time Out</th>
                        {status === "Parked" && <th className="px-2 text-white text-sm py-2">Actual Intime</th>}

                        <th className="px-2 text-white text-sm py-2">Status</th>
                        <th className="px-2 text-white text-sm py-2">Booking Price</th>
                        {status !== "Completed" && <th className="px-2 text-white text-sm py-2">SGST</th>}
                        {status !== "Completed" && <th className="px-2 text-white text-sm py-2">CGST</th>}
                        {status === "Completed" && <th className="px-2 text-white text-sm py-2">Exceed Price </th>}
                        <th className="px-2 text-white text-sm py-2">Total</th>
                        {status === "Completed" && <th className="px-2 text-white text-sm py-2">Generate Ereciept </th>}
                    </tr>
                </thead>
                <tbody>
                    {filteredBookings.map((item, index) => (
                        <tr key={item._id} onClick={() => openPopup(item)} style={{ cursor: 'pointer' }} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-300 transition-colors hover:bg-slate-400'}>
                            <td className="border text-center px-1 text-sm py-2">{item.code}</td>
                            <td className="border text-center px-2 text-sm py-2">{item.vehicle_number}</td>
                            <td className="border text-center px-2 text-sm py-2">{item.vehicle_name}</td>
                            <td className="border text-center px-2 text-sm py-2">{item.vehicle_type}</td>

                            <td className="border text-center px-2 text-sm py-2">{item.parkingName}</td>
                            {status !== "Confirmed" || status !== "Cancelled" && <td className="border text-center px-2 text-sm py-2">{item.parkedAt?.spaceName}</td>}
                            {status == "Cancelled" && <td className="border text-center px-2 text-sm py-2">{item.refundId}</td>}

                            <td className="border text-center px-2 text-sm py-2">{new Date(item.inTime).toLocaleTimeString()}</td>
                            <td className="border text-center px-2 text-sm py-2">{new Date(item.outTime).toLocaleTimeString()}</td>
                            {status === "Parked" && <td className="border text-center px-2 text-sm py-2">{new Date(item.actualInTime).toLocaleTimeString()}</td>}
                            <td className="border text-center px-2 text-sm py-2">{item.status}</td>
                            <td className="border text-center px-2 text-sm py-2">{status === "Completed" ? item.totalPrice : item.price}</td>
                            {status !== "Completed" && <td className="border text-center px-2 text-sm py-2">{item.sgst}</td>}
                            {status !== "Completed" && <td className="border text-center px-2 text-sm py-2">{item.cgst}</td>}
                            {status === "Completed" && <td className="border text-center px-2 text-sm py-2">{Math.round(item.exceedTotalPrice)}</td>}
                            <td className="border text-center px-2 text-sm py-2">
                                {status === "Completed" ? Math.round(item.bookingPrice) : Math.round(item.totalPrice)}
                            </td>
                            {status === "Completed" && (
                                <td className="border text-center px-2 text-sm py-2">
                                    <Link to={`/ereciept?${queryString.stringify(item)}`} className=" font-bold text-blue-600 underline">Ereciept</Link>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedBooking && <Modal status={status} selectedBooking={selectedBooking} />}
        </div>
    );
}

export default BookingTable;
