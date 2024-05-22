import IncomingPopup from '../../GaurdComponents/BookingComponent/Popup/IncomingPopup';
import ParkedPopup from '../../GaurdComponents/BookingComponent/Popup/ParkedPopup';
import CompletedPopup from '../../GaurdComponents/BookingComponent/Popup/CompletedPopup'
function Modal({selectedBooking, status}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg cursor-auto w-[70vw]">  
          {status=="Parked" && <ParkedPopup selectedBooking={selectedBooking} />
            }
             {status=="Confirmed" && <IncomingPopup selectedBooking={selectedBooking} />
            }
             {status=="Completed" && <CompletedPopup selectedBooking={selectedBooking} />
            }
</div>
        </div>
  )
}

export default Modal