import React from 'react'
import IncomingPopup from './Popup/IncomingPopup';
import ParkedPopup from './Popup/ParkedPopup';
import CompletedPopup from './Popup/CompletedPopup'
function Modal({selectedBooking, status}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg cursor-auto w-[500px]">  
          {status=="Parked" && <ParkedPopup selectedBooking={selectedBooking} />
            }
             {status=="Incoming" && <IncomingPopup selectedBooking={selectedBooking} />
            }
             {status=="Completed" && <CompletedPopup selectedBooking={selectedBooking} />
            }
</div>
        </div>
  )
}

export default Modal