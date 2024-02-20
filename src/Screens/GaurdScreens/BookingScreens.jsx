import { useState ,useEffect, useRef} from "react";
import ReactToPrint from "react-to-print";
import moment from "moment";
import { Link } from "react-router-dom";

const BookingsG = () => {

    const formatDate = (dateTimeString, isParkingTime) => {
        const format = isParkingTime ? "MMMM Do YYYY, h:mm:ss a" : "MMMM Do YYYY, h:mm:ss a";
        console.log(moment(dateTimeString).format(format));
        return moment(dateTimeString).format(format);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [isEditing, setIsEditing] = useState(false);
    const [editedBooking, setEditedBooking] = useState({});

    const [BookingsPerPage] = useState(12);
    const [BookingDetails, setBookingDetails] = useState([]);
    // const BookingDetails = [
    //     {
    //    _i: 1,
    //         "userName": "John Doe",
    //         "bookingTime": "2024-02-21T09:00:00",
    //         "bookingDuration": "1 hours",
    //         "parkingTime": "2024-02-20T09:00:00",
    //         "checkoutTime": "2024-02-20T10:00:00",
    //         "exceedTime": "00:00",
    //         "totalTime": "01:00",
    //         "bookingPrice": "$10",
    //         "exceedPrice": "$0",
    //         "parkingStatus": "Completed"
    //     },
    //     {
    //    _i: 2,
    //         "userName": "Alice Smith",
    //         "bookingTime": "2024-02-08T10:30:00",
    //         "bookingDuration": "1 hour",
    //         "parkingTime": "2024-02-08T10:30:00",
    //         "checkoutTime": "2024-02-08T11:30:00",
    //         "exceedTime": "00:00",
    //         "totalTime": "01:00",
    //         "bookingPrice": "$5",
    //         "exceedPrice": "$0",
    //         "parkingStatus": "Completed"
    //     },
    //     {
    //         "bookingId": 3,
    //         "userName": "Emma Johnson",
    //         "bookingTime": "2024-02-08T12:00:00",
    //         "bookingDuration": "3 hours",
    //         "parkingTime": "2024-02-08T12:00:00",
    //         "checkoutTime": "2024-02-08T15:00:00",
    //         "exceedTime": "00:00",
    //         "totalTime": "03:00",
    //         "bookingPrice": "$15",
    //         "exceedPrice": "$0",
    //         "parkingStatus": "Completed"
    //     },
    //     {
    //         "bookingId": 4,
    //         "userName": "Michael Brown",
    //         "bookingTime": "2024-02-08T14:30:00",
    //         "bookingDuration": "4 hours",
    //         "parkingTime": "2024-02-08T14:30:00",
    //         "checkoutTime": "2024-02-08T18:30:00",
    //         "exceedTime": "00:00",
    //         "totalTime": "04:00",
    //         "bookingPrice": "$20",
    //         "exceedPrice": "$0",
    //         "parkingStatus": "Completed"
    //     },
    //     {
    //         "bookingId": 5,
    //         "userName": "Sophia Wilson",
    //         "bookingTime": "2024-02-08T04:10:00",
    //         "bookingDuration": "2 hours",
    //         "parkingTime": "2024-02-08T04:10:00",
    //         "checkoutTime": "2024-02-20T16:09:00",
    //         "exceedTime": "00:00",
    //         "totalTime": "02:00",
    //         "bookingPrice": "$10",
    //         "exceedPrice": "$0",
    //         "parkingStatus": "InProgress"
    //     },
    // //     {
    // //         "bookingId": 6,
    // //         "userName": "Olivia Martinez",
    // //         "bookingTime": "2024-02-08T17:30:00",
    // //         "bookingDuration": "3 hours",
    // //         "parkingTime": "2024-02-08T17:30:00",
    // //         "checkoutTime": "2024-02-08T20:30:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "03:00",
    // //         "bookingPrice": "$15",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "Requested"
    // //     },
    // //     {
    // //         "bookingId": 7,
    // //         "userName": "William Taylor",
    // //         "bookingTime": "2024-02-08T10:00:00",
    // //         "bookingDuration": "3 hours",
    // //         "parkingTime": "2024-02-08T10:00:00",
    // //         "checkoutTime": "2024-02-08T13:00:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "03:00",
    // //         "bookingPrice": "$15",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "Completed"
    // //     },
    // //     {
    // //         "bookingId": 8,
    // //         "userName": "Sophie Brown",
    // //         "bookingTime": "2024-02-08T13:30:00",
    // //         "bookingDuration": "1 hour",
    // //         "parkingTime": "2024-02-08T13:30:00",
    // //         "checkoutTime": "2024-02-08T14:30:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "01:00",
    // //         "bookingPrice": "$5",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "InProgress"
    // //     },
    // //     {
    // //         "bookingId": 9,
    // //         "userName": "Henry Davis",
    // //         "bookingTime": "2024-02-08T15:00:00",
    // //         "bookingDuration": "2 hours",
    // //         "parkingTime": "2024-02-08T15:00:00",
    // //         "checkoutTime": "2024-02-08T17:00:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "02:00",
    // //         "bookingPrice": "$10",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "Requested"
    // //     },
    // //     {
    // //         "bookingId": 10,
    // //         "userName": "Isabella Rodriguez",
    // //         "bookingTime": "2024-02-08T11:30:00",
    // //         "bookingDuration": "4 hours",
    // //         "parkingTime": "2024-02-08T11:30:00",
    // //         "checkoutTime": "2024-02-08T15:30:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "04:00",
    // //         "bookingPrice": "$20",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "InProgress"
    // //     },
    // //     {
    // //         "bookingId": 11,
    // //         "userName": "Liam Martinez",
    // //         "bookingTime": "2024-02-08T14:00:00",
    // //         "bookingDuration": "3 hours",
    // //         "parkingTime": "2024-02-08T14:00:00",
    // //         "checkoutTime": "2024-02-08T17:00:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "03:00",
    // //         "bookingPrice": "$15",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "Requested"
    // //     },
    // //     {
    // //         "bookingId": 12,
    // //         "userName": "Ethan Garcia",
    // //         "bookingTime": "2024-02-08T16:30:00",
    // //         "bookingDuration": "2 hours",
    // //         "parkingTime": "2024-02-08T16:30:00",
    // //         "checkoutTime": "2024-02-08T18:30:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "02:00",
    // //         "bookingPrice": "$10",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "Completed"
    // //     },
    // //     {
    // //         "bookingId": 13,
    // //         "userName": "Isabella Rodriguez",
    // //         "bookingTime": "2024-02-08T11:30:00",
    // //         "bookingDuration": "4 hours",
    // //         "parkingTime": "2024-02-08T11:30:00",
    // //         "checkoutTime": "2024-02-08T15:30:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "04:00",
    // //         "bookingPrice": "$20",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "InProgress"
    // //     },
    // //     {
    // //         "bookingId": 14,
    // //         "userName": "Liam Martinez",
    // //         "bookingTime": "2024-02-08T14:00:00",
    // //         "bookingDuration": "3 hours",
    // //         "parkingTime": "2024-02-08T14:00:00",
    // //         "checkoutTime": "2024-02-08T17:00:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "03:00",
    // //         "bookingPrice": "$15",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "Requested"
    // //     },
    // //     {
    // //         "bookingId": 15,
    // //         "userName": "Ethan Garcia",
    // //         "bookingTime": "2024-02-08T16:30:00",
    // //         "bookingDuration": "2 hours",
    // //         "parkingTime": "2024-02-08T16:30:00",
    // //         "checkoutTime": "2024-02-08T18:30:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "02:00",
    // //         "bookingPrice": "$10",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "Completed"
    // //     },
    // //     {
    // //         "bookingId": 16,
    // //         "userName": "Ethan Garcia",
    // //         "bookingTime": "2024-02-08T16:30:00",
    // //         "bookingDuration": "2 hours",
    // //         "parkingTime": "2024-02-08T16:30:00",
    // //         "checkoutTime": "2024-02-08T18:30:00",
    // //         "exceedTime": "00:00",
    // //         "totalTime": "02:00",
    // //         "bookingPrice": "$10",
    // //         "exceedPrice": "$0",
    // //         "parkingStatus": "Completed"
    // //     },
    // ];

    useEffect(() => {
        const fetchGuardDetails = () => {
          fetch(`http://localhost:7001/v1/api/booking/65d32bed77a295e912a381e4`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              console.log(data);
              setBookingDetails(data.data)
              // console.log(data); // Log the fetched data
            })
            .catch(error => {
              console.error('Error fetching guard details:', error);
            });
        };
    
        fetchGuardDetails();
      }, []);
    

      const calculateExceedTime = (checkoutTime, bookingDuration) => {
        const checkoutTimestamp = new Date(checkoutTime).getTime();
        const bookingEndTimestamp = new Date(checkoutTime).getTime() - (parseInt(bookingDuration) * 60 * 1000); // Subtract booking duration in milliseconds
      
        const exceedTimeInMilliseconds = Math.max(0, checkoutTimestamp - bookingEndTimestamp);
        const exceedTimeInSeconds = Math.floor(exceedTimeInMilliseconds / 1000);
      
        const hours = Math.floor(exceedTimeInSeconds / 3600);
        const minutes = Math.floor((exceedTimeInSeconds % 3600) / 60);
      
        return { hours, minutes };
      };
    
      const bookingsWithExceedTime = BookingDetails.map((booking) => {
        const { hours, minutes } = calculateExceedTime(booking.checkoutTime, booking.bookingDuration);
        const exceedPrice = hours > 0 || minutes > 0 ? `$${Math.round(hours + minutes / 60) * 5}` : "$0"; // Charge $5 per hour for exceed time
    
        return {
          ...booking,
          exceedTime: `${hours}H ${minutes}M`,
          exceedPrice,
        };
      });
    

    
    

    const handleEdit = (index) => {
  const selectedBooking = bookingsWithExceedTime[index];
  setEditedBooking(selectedBooking);

  setIsEditing(true);

  // Log the selectedBooking in the callback function
  setEditedBooking((prevBooking) => {
    console.log("Selected Booking Information:", selectedBooking);
    return prevBooking;
  });
};

    
      const detail = {
        "bookingId": 16,
            "userName": "Ethan Garcia",
            "bookingTime": "2024-02-08T16:30:00",
            "bookingDuration": "2 hours",
            "parkingTime": "2024-02-08T16:30:00",
            "checkoutTime": "2024-02-08T18:30:00",
            "exceedTime": "00:00",
            "totalTime": "02:00",
            "bookingPrice": "$10",
            "exceedPrice": "$0",
            "parkingStatus": "Completed"
      };
  
      
      const handleSave = () => {
        // Check if exceed time is greater than zero
        const exceedTimeInMinutes = calculateExceedTime(editedBooking.checkoutTime).hours * 60 + calculateExceedTime(editedBooking.checkoutTime).minutes;
    
        if (exceedTimeInMinutes > 0) {
            // Show confirmation popup
            const confirmMessage = `Exceed time detected. Exceed amount: $${Math.round(exceedTimeInMinutes / 60) * 5}\nDo you want to mark the booking as Completed?`;
    
            if (window.confirm(confirmMessage)) {
                // User clicked "OK," update booking status to "Completed"
                setEditedBooking((prevBooking) => ({
                    ...prevBooking,
                    parkingStatus: "Completed",
                }));
            }
        } else {
            // Exceed time is zero, update booking status to "InProgress"
            setEditedBooking((prevBooking) => ({
                ...prevBooking,
                parkingStatus: "InProgress",
            }));
        }
    
        // Handle save action, for now, just log the editedBooking
        console.log("Updated Booking Information:", editedBooking);
        setIsEditing(false);
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBooking((prevBooking) => ({
            ...prevBooking,
            [name]: value,
        }));
    };

    const indexOfLastBooking = currentPage * BookingsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - BookingsPerPage;
    const currentBookings = BookingDetails.slice(
        indexOfFirstBooking,
        indexOfLastBooking
    ).map((booking) => ({
        ...booking,
        parkingTime: formatDate(booking.parkingTime, true),
        checkoutTime: formatDate(booking.checkoutTime, false),
    }));

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>

            {isEditing ? (
                <div className="bg-[#ffffff] shadow-xl border border-gray-300 rounded-sm w-full duration-300 ease-in-out overflow-hidden p-12" style={{ height: "80vh" }}>
                    <form>
                        <div className="mb-8 grid grid-cols-3 gap-6">
                            {Object.keys(editedBooking).map((key, index) => {
                                if (key === "parkingStatus") {
                                    return (
                                        <div key={index} className="relative h-10 w-full">
                                            <input
                                                type="text"
                                                name={key}
                                                value={editedBooking[key]}
                                                onChange={handleChange}
                                                className="peer h-full w-full bg-slate-50 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800">
                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                            </label>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={index} className="relative h-10 w-full">
                                            <span className="text-blue-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                                            <span className="text-blue-gray-900 ml-2">{editedBooking[key]}</span>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={handleSave}
                                className="bg-blue-500 text-white py-1 px-2 rounded-sm mx-2 hover:bg-blue-600 focus:outline-none"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-300 text-gray-700 py-1 px-2 rounded-sm hover:bg-red-600 focus:outline-none"
                            >
                                Cancel
                            </button>
                            <Link  to={`/generatee/${encodeURIComponent(JSON.stringify(editedBooking))}`}>   <button
                                type="button"
                                className="bg-gray-300 mx-6 text-gray-700 py-1 px-2 rounded-sm hover:bg-red-600 focus:outline-none"
                            >
                                Generate Bill
                            </button> </Link>

                          
                           
                        </div>
                    </form>
                </div>
            ) : (
                <div>
                    <div className="flex justify-between  my-8">
                        <div className="text-3xl font-semibold px-8  text-gray-700">Booking Details</div>
                        <div className="flex p-1 bg-yellow-300  rounded-tl-md rounded-bl-md w-[600px]">
                            <div className=" text-white p-1 rounded-lg">
                                <button type="button" className="text-black bg-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md duration-700 text-sm px-4 py-1.5 me-2  dark:bg-white hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                            </div>
                            <div className=" text-black p-1  rounded-md">
                                <button type="1.5utton" className="text-black bg-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-1.5 me-2  dark:bg-white hover:text-white duration-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                            </div>
                            {/* <div className=" text-black p-1 rounded-lg">
                        <select className="">
                            <option>parking 1</option>
                            <option>parking 2</option>
                            <option>parking 3</option>
                            <option>parking 4</option>
                        </select>
                    </div> */}
                        </div>
                    </div>

                    <div  className="overflow-x-auto  rounded-sm">
                        <table className="w-full">
                            <thead className="bg-[#edf1f7] p-1">
                                <tr>
                                    <th className="px-2 text-sm py-2 font-semibold">Booking ID</th>
                                    <th className="px-2 text-sm py-2 font-semibold">User Name</th>
                                    <th className="px-2 text-sm py-2 font-semibold">Booking Time</th>
                                    <th className="px-2 text-sm py-2 font-semibold">Booking Duration</th>
                                    <th className="px-2 text-sm py-2 font-semibold">Parking Time</th>
                                    <th className="px-2 text-sm py-2 font-semibold">Checkout Time</th>
                                    <th className="px-2 text-sm py-2 font-semibold">Exceed Time</th>
                                    <th className="px-2 text-sm py-2 font-semibold">Total Time</th>
                                    <th className="px-2 text-sm py-2 font-semibold">Booking Price</th>
                                    <th className="px-2 text-sm py-2 font-semibold">Exceed Price</th>
                                    <th className="px-2 text-sm py-2 font-semibold">Booking Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600  ">
                                {currentBookings.map((Booking, index) => (
                                    <tr onClick={() => handleEdit(index)} key={index} className={index % 2 === 0 ? 'bg-white hover:bg-gray-200 duration-300' : 'hover:bg-gray-200 duration-300'}>
                                        <td className="px-4 text-sm py-2 ">{Booking._id}</td>
                                        <td className="px-4 text-sm py-2">{Booking.enserId}</td>
                                        <td className="px-4 text-sm py-2">{Booking.bparkingId}</td>
                                        <td className="px-4 text-sm py-2">{Booking.bookingDuration}</td>
                                        <td className="px-4 text-sm py-2">{Booking.timeIn}</td>
                                        <td className="px-4 text-sm py-2">{Booking.timeOut}</td>
                                        <td className="px-4 text-sm py-2">{Booking.exceedTime}</td>
                                        <td className="px-4 text-sm py-2">{Booking.totalTime}</td>
                                        <td className="px-4 text-sm py-2">{Booking.bookingPrice}</td>
                                        <td className="px-4 text-sm py-2">{Booking.exceedPrice}</td>
                                        <td className="px-4 text-sm py-2">{Booking.parkingStatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: Math.ceil(BookingDetails.length / BookingsPerPage) }, (_, i) => (
                            <button key={i} onClick={() => paginate(i + 1)} className={`mx-1 px-3 py-1 rounded-2xl ${currentPage === i + 1 ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{i + 1}</button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingsG;
