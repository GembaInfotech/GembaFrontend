import { useEffect, useState } from 'react';

function TransactionTable({ booking, status, parking }) {
    const [loading, setLoading] = useState(true);
    const [income, setIncome] = useState(0);
    const [cgst, setCGST] = useState(0);
    const [sgst, setSGST] = useState(0);
    const [filteredBooking, setFilteredBooking] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filter, setFilter] = useState('all');
    const [specificDate, setSpecificDate] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [carNumber, setCarNumber] = useState('');

    useEffect(() => {
        setFilteredBooking(booking);
        console.log(booking);
        setFilter('all');
    }, [booking]);

    useEffect(() => {
        applyFilter();
    }, [filter, startDate, endDate, specificDate, selectedMonth, carNumber]);

    const calincome = (bookingData) => {
        let amt = 0;
        bookingData.forEach((booking) => {
            amt += booking.bookingPrice;
        });
        setIncome(amt);
    };

    const calcgst = (bookingData) => {
        let cgst = 0;
        bookingData.forEach((booking) => {
            cgst += (booking.cgst + booking.exceedCGST);
        });
        setCGST(Math.round(cgst));
    };

    const calsgst = (bookingData) => {
        let sgst = 0;
        bookingData.forEach((booking) => {
            sgst += (booking.cgst + booking.exceedCGST);
        });
        setSGST(Math.round(sgst));
    };

    useEffect(() => {
        calincome(filteredBooking);
        calcgst(filteredBooking);
        calsgst(filteredBooking);
    }, [filteredBooking]);

    const applyFilter = () => {
        let filtered = booking;
        const now = new Date();
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const startOfYesterday = new Date(startOfToday);
        startOfYesterday.setDate(startOfYesterday.getDate() - 1);
        const startOfWeek = new Date(startOfToday);
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        if (filter === 'today') {
            filtered = booking.filter(item => new Date(item.inTime) >= startOfToday);
        } else if (filter === 'yesterday') {
            filtered = booking.filter(item => new Date(item.inTime) >= startOfYesterday && new Date(item.inTime) < startOfToday);
        } else if (filter === 'thisWeek') {
            filtered = booking.filter(item => new Date(item.inTime) >= startOfWeek);
        } else if (filter === 'thisMonth') {
            filtered = booking.filter(item => new Date(item.inTime) >= startOfMonth);
        } else if (filter === 'specificDate') {
            if (specificDate) {
                const specificDateObj = new Date(specificDate);
                filtered = booking.filter(item => {
                    const bookingDate = new Date(item.inTime).toISOString().split('T')[0];
                    return bookingDate === specificDateObj.toISOString().split('T')[0];
                });
            }
        } else if (filter === 'selectedMonth') {
            if (selectedMonth) {
                const [year, month] = selectedMonth.split('-');
                filtered = booking.filter(item => {
                    const bookingDate = new Date(item.inTime);
                    return bookingDate.getFullYear() === parseInt(year) && bookingDate.getMonth() === parseInt(month) - 1;
                });
            }
        } else if (filter === 'custom') {
            if (startDate && endDate) {
                filtered = booking.filter(item => {
                    const bookingDate = new Date(item.inTime).toISOString().split('T')[0];
                    return bookingDate >= startDate && bookingDate <= endDate;
                });
            }
        }

        if (carNumber) {
            filtered = filtered.filter(item => item.vehicle_number.includes(carNumber));
        }

        setFilteredBooking(filtered);
    };

    const handleFilterToggle = (newFilter) => {
        setFilter(filter === newFilter ? 'all' : newFilter);
    };

    return (
        <div className="container mx-auto max-h-48  ">
            <div className="p-2">
                <button onClick={() => handleFilterToggle('today')} className={`mr-2 p-1 rounded-md ${filter === 'today' ? 'bg-gray-300 text-black' : 'bg-blue-600 text-white '}`}>Today</button>
                <button onClick={() => handleFilterToggle('yesterday')} className={`mr-2 p-1 rounded-md ${filter === 'yesterday' ? 'bg-gray-300 text-black' : 'bg-blue-600 text-white '}`}>Yesterday</button>
                <button onClick={() => handleFilterToggle('thisWeek')} className={`mr-2 p-1 rounded-md ${filter === 'thisWeek' ? 'bg-gray-300 text-black' : 'bg-blue-600 text-white '}`}>This Week</button>
                <button onClick={() => handleFilterToggle('thisMonth')} className={`mr-2 p-1 rounded-md ${filter === 'thisMonth' ? 'bg-gray-300 text-black' : 'bg-blue-600 text-white '}`}>This Month</button>
                <button onClick={() => handleFilterToggle('specificDate')} className={`mr-2 p-1 rounded-md ${filter === 'specificDate' ? 'bg-gray-300 text-black' : 'bg-blue-600 text-white '}`}>Specific Date</button>
                <button onClick={() => handleFilterToggle('selectedMonth')} className={`mr-2 p-1 rounded-md ${filter === 'selectedMonth' ? 'bg-gray-300 text-black' : 'bg-blue-600 text-white '}`}>Select Month</button>
                <button onClick={() => handleFilterToggle('custom')} className={`mr-2 p-1 rounded-md ${filter === 'custom' ? 'bg-gray-300 text-black' : 'bg-blue-600 text-white '}`}>Custom</button>
               
                {filter === 'specificDate' && (
                    <div className="mt-2">
                        <label className="block">
                            Select Date:
                            <input type="date" value={specificDate} onChange={(e) => setSpecificDate(e.target.value)} className="ml-2 p-1 border" />
                        </label>
                    </div>
                )}
                {filter === 'selectedMonth' && (
                    <div className="mt-2">
                        <label className="block">
                            Select Month:
                            <input type="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="ml-2 p-1 border" />
                        </label>
                    </div>
                )}
                {filter === 'custom' && (
                    <div className="mt-2">
                        <label className="block">
                            Start Date:
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="ml-2 p-1 border" />
                        </label>
                        <label className="block mt-2">
                            End Date:
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="ml-2 p-1 border" />
                        </label>
                        <button onClick={applyFilter} className="mt-2 p-1 bg-blue-500 text-white">Filter</button>
                    </div>
                )}
            </div>

            <div className='p-2 bg-[#EEEEEE]'>
                <h1 className='font-semibold text-sm'>Total Income: {income}</h1>
                <h1 className='text-sm font-semibold'>SGST: {sgst}</h1>
                <h1 className='text-sm font-semibold'>CGST: {cgst}</h1>
                <h1 className='text-sm font-semibold'>Total GST: {(sgst + cgst)}</h1>
                <h1 className='text-sm font-semibold'>Net Income (Total Income - Total GST): {Math.round(income - (cgst + sgst))}</h1>
            </div>
             <div className='max-w-[80vw] overflow-x-auto'>
             <table className="table-auto    ">
                <thead className="bg-gray-800">
                    <tr>
                    <th className="px-2 text-white py-2 min-w-32 text-center ">Booking ID</th>
                    <th className="px-2 text-white py-2 min-w-32 text-center ">Parking ID</th>
                    <th className="px-2 text-white py-2 min-w-32 text-center ">User ID</th>

                        <th className="px-2 text-white py-2 min-w-32 text-center ">Transaction ID</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Transaction Date</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Transaction Time</th>


                        <th className="px-2 text-white py-2 min-w-32 text-center ">Car Number</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center  ">Parking Name</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Date</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">In Time</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Out Time</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Parked In</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Parked Out</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Online Price</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">CGST</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">SGST</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Guard Id</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Guard Name</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Offline Price</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">CGST</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">SGST</th>
                        <th className="px-2 text-white py-2 min-w-32 text-center ">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooking.map((item, index) => (
                        <tr key={item._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 transition-colors hover:bg-gray-200'}>
                                                        <td className="border px-2 text-sm font-semibold py-2 text-center">{item.code}</td>

                                                        <td className="border px-2 text-sm font-semibold py-2 text-center">{item.parkingCode}</td>

                                                        <td className="border px-2 text-sm font-semibold py-2 text-center">{item.user}</td>


                            <td className="border px-2 text-sm font-semibold py-2 text-center">{item.transaction_id}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{new Date(item.createdAt).toLocaleDateString()}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{new Date(item.createdAt).toLocaleTimeString()}</td>


                            <td className="border px-2 text-sm font-semibold py-2 text-center">{item.vehicle_number}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{item.parkingName}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{new Date(item.inTime).toLocaleDateString()}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{new Date(item.inTime).toLocaleTimeString()}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{new Date(item.outTime).toLocaleTimeString()}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{new Date(item.actualInTime).toLocaleTimeString()}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{new Date(item.actualOutTime).toLocaleTimeString()}</td>

                            <td className="border px-2 text-sm font-semibold py-2 text-center">{item.price}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{item.cgst}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{item.cgst }</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">G00000001</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">Guard</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{item.exceedPrice}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{item.exceedCGST}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{ item.exceedCGST}</td>
                            <td className="border px-2 text-sm font-semibold py-2 text-center">{item.bookingPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
             </div>
           
        </div>
    );
}

export default TransactionTable;