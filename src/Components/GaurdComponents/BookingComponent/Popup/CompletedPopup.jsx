import { format } from 'date-fns'
import { Link } from 'react-router-dom';
// import queryString from 'query-string';
function CompletedPopup({ selectedBooking }) {
  const ADDON_AMOUNT = 10;
  // const serializedBooking = queryString.stringify(selectedBooking);
  const exceedPrice = (bookingPrice) => {
    // Calculate the total booking price with an additional amount
    return bookingPrice + ADDON_AMOUNT;
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
      <p className="text-gray-700 text-sm  text-green-500">Status: {selectedBooking.status}</p>
      <p className="text-gray-700 text-sm ">Car Number: {selectedBooking.vehicle_number}</p>
      <div className="flex justify-between bg-blue-100 p-2 rounded-sm ">

        <p className="text-gray-700 text-sm ">Time In: {format(selectedBooking.inTime, 'hh:mm aa dd-MM-yyyy')}</p>
        <p className="text-gray-700 text-sm ">Time Out: {format(selectedBooking.outTime, 'hh:mm aa dd-MM-yyyy')}</p>
      </div>
      <p className="text-gray-700 text-sm ">Total time car Parked book: {Math.floor(selectedBooking.duration / 60)} hours {selectedBooking.duration % 60} minutes</p>
      <div className="flex justify-between bg-blue-100 p-2 rounded-sm ">

        <p className="text-gray-700 text-sm "> actual Time In: {format(selectedBooking.actualInTime, 'hh:mm aa dd-MM-yyyy')}</p>
        <p className="text-gray-700 text-sm "> actual Time Out: {format(selectedBooking.actualOutTime, 'hh:mm aa dd-MM-yyyy')}</p>
      </div>
      <p className="text-gray-700 text-sm ">Total time car Parked book actual: {Math.floor(selectedBooking.actualDuration / 60)} hours {selectedBooking.actualDuration % 60} minutes</p>

      <div className="flex justify-between bg-blue-100 p-2 rounded-sm "> <p className="text-gray-700 text-sm ">exceed time: {Math.floor(selectedBooking.exceedTime / 60)} hours {selectedBooking.exceedTime % 60} minutes</p>
        <p className="text-gray-700 text-sm ">exeed price : {selectedBooking.exceedPrice}</p> </div>
      <div className='flex justify-between bg-blue-100 p-2 rounded-sm  '>

        <p className="text-gray-700 text-sm ">exceed sgst : {selectedBooking.exceedSGST}</p>
        <p className="text-gray-700 text-sm ">exceed cgst : {selectedBooking.exceedSGST}</p>
      </div>

      <p className="text-gray-700 text-sm ">paid amount  : {selectedBooking.totalPrice}</p>
      <div className="flex justify-between bg-blue-100 p-2 rounded-sm">

        <p className="text-gray-700 text-sm ">total price : {selectedBooking.bookingPrice}</p>
        <p className="text-gray-700 text-sm ">Price to be paid : {selectedBooking.bookingPrice - selectedBooking.totalPrice}</p>
      </div>

      {/* <div className='mt-4'>
       <Link to={`/ereciept?${serializedBooking}`} className="mt-4 text-xl font-bold text-green-500 underline "> Generate Ereciept</Link>
      </div> */}
      </div>
  )
}

export default CompletedPopup