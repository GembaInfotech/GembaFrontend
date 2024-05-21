function CompletedPopup({selectedBooking}) {
  const ADDON_AMOUNT = 10;
  const exceedPrice = (bookingPrice) => {
    // Calculate the total booking price with an additional amount
    return bookingPrice + ADDON_AMOUNT;
};   
      
  return (
<div>
<h2 className="text-lg font-bold mb-4 text-gray-800">Booking Details</h2>
  <p className="text-gray-700 text-green-500">Status: {selectedBooking.status}</p>
  <p className="text-gray-700">Car Number: {selectedBooking.vehicle_number}</p>

  <p className="text-gray-700">Time In: {new Date(selectedBooking.inTime).toLocaleString()}</p>
  <p className="text-gray-700">Time Out: {new Date(selectedBooking.outTime).toLocaleString()}</p>
  <p className="text-gray-700">Booking Price: {selectedBooking.status === "Completed" ? selectedBooking.totalPrice : selectedBooking.price}</p>
</div>
  )
}

export default CompletedPopup