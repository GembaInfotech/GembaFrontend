import { useEffect, useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
            item.num.toLowerCase().includes(searchTerm.toLowerCase())
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
    }, [selectedBooking]);

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
                <button
                    className="bg-slate-300 text-black py-2 px-3 rounded-md mt-4 "
                    disabled
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            <table className="table-auto w-full">
                <thead className="bg-gray-800">
                    <tr>
                        <th className="px-4 text-white py-2">Serial No.</th>
                        <th className="px-4 text-white py-2">Car Number</th>
                        <th className="px-4 text-white py-2">Parking Name</th>

                        <th className="px-4 text-white py-2">Time In</th>
                        <th className="px-4 text-white py-2">Time Out</th>
                        <th className="px-4 text-white py-2">Status</th>
                        <th className="px-4 text-white py-2">Booking Price</th>
                        {status != "Completed" && <th className="px-4 text-white py-2">SGST</th>}
                        {status != "Completed" && <th className="px-4 text-white py-2">CGST</th>}
                        {status == "Completed" && <th className="px-4 text-white py-2">Exceed Price </th>
                        }
                        <th className="px-4 text-white py-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBookings.map((item, index) => (
                        <tr key={item._id} onClick={() => openPopup(item)} style={{ cursor: 'pointer' }} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 transition-colors hover:bg-gray-200'}>
                            <td className="border px-4 text-sm font-semibold py-2">{index + 1}</td>
                            <td className="border px-4 text-sm font-semibold py-2">{item.num}</td>
                            <td className="border px-4 text-sm font-semibold py-2">{item.pn}</td>
                            <td className="border px-4 text-sm font-semibold py-2">{new Date(item.In).toLocaleTimeString()}</td>
                            <td className="border px-4 text-sm font-semibold py-2">{new Date(item.out).toLocaleTimeString()}</td>
                            <td className="border px-4 text-sm font-semibold py-2">{item.status}</td>

                            <td className="border px-4 text-sm font-semibold py-2">{status == "Completed" ? item.price + 2* Math.round(item.price*0.09) : item.price}</td>
                            {status != "Completed" && <td className="border px-4 text-sm font-semibold py-2">{Math.round(item.price * 0.09)}</td>}
                            {status != "Completed" && <td className="border px-4 text-sm font-semibold py-2">{Math.round(item.price * 0.09)}</td>}
                            {status == "Completed" && <td className="border px-4 text-sm font-semibold py-2">{item.tp? (item.tp - (item.price + 2 * Math.round(item.price*0.09))): 0}</td>}
                            <td className="border px-4 text-sm font-semibold py-2">
                                {status === "Completed" ? item.tp : item.price + 2 * Math.round(item.price * 0.09)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedBooking && <Modal status={status} selectedBooking={selectedBooking} />}
        </div>
    );
}

export default BookingTable;