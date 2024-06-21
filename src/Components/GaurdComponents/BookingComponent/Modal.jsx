import IncomingPopup from '../../GaurdComponents/BookingComponent/Popup/IncomingPopup';
import ParkedPopup from '../../GaurdComponents/BookingComponent/Popup/ParkedPopup';
import CompletedPopup from '../../GaurdComponents/BookingComponent/Popup/CompletedPopup';

function Modal({ selectedBooking, status }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-lg cursor-auto w-1/2">
        {status === "Parked" && <ParkedPopup selectedBooking={selectedBooking} />}
        {status === "Confirmed" && <IncomingPopup selectedBooking={selectedBooking} />}
        {status === "Completed" && <CompletedPopup selectedBooking={selectedBooking} />}
      </div>
    </div>
  );
}

export default Modal;
