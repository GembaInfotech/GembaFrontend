import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { useNavigate} from 'react-router-dom';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Ereciept = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const compRef = useRef();
  const details = queryString.parse(location.search);
  console.log(details);

  return (
    <>
      <div className="flex justify-center">
        <div ref={compRef} className='lg:max-w-screen-xl xl:max-w-screen-2xl border border-black p-4'>
          <div className='flex flex-col justify-center items-center mx-2'>
            <h1 className='text-lg font-semibold font-mono text-gray-700'>ParkingName</h1>
            <h3 className='text-sm font-normal text-gray-700'>{details?.parkingName}</h3>
          </div>

          <div className='flex flex-col justify-center items-center mx-2'>
            <h1 className='text-sm font-normal text-gray-600'><span>GSTIN</span> 03AAAVR87652N9V </h1>
            <div className='flex flex-col items-center'>
              <h1 className='text-sm font-normal text-gray-600 mx-1'><span>Licence No</span> ARQ-933432 </h1>
              <h1 className='text-sm font-normal text-gray-600 mx-1'><span>State Code</span> 03 </h1>
            </div>
            <h1 className='text-gray-400'>--------------------------</h1>
            <div className='flex fle-col items-center'>
              <h1 className='text-sm font-normal text-gray-600 mx-1'><span>Vehicle Number</span> {details?.vehicle_number} </h1>
            </div>
          </div>

          <div className='m-2'>
            <div className='flex flex-row justify-between'>
              <h1 className='text-sm font-normal text-gray-600'>In Time </h1>
              <h1 className='text-[12px] font-normal text-gray-600'>{new Date(details?.inTime).toLocaleString()}</h1>
            </div>
            <div className='flex flex-row justify-between'>
              <h1 className='text-sm font-normal text-gray-600'>Out Time </h1>
              <h1 className='text-[12px] font-normal text-gray-600'>{new Date(details?.outTime).toLocaleString()}</h1>
            </div>
          </div>

          <div className='  m-2'>
            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-normal  text-gray-600'>Amount </h1>

              <div className='flex flex-row justify-between'>   <h1 className='text-[14px] font-normal mt-1  text-gray-600'><MdOutlineCurrencyRupee />
              </h1>
                <h1 className='text-[14px] font-normal  text-gray-600'>{details?.price}
                </h1></div>

            </div>
            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-normal  text-gray-600'>CGST (9%) </h1>
              <h1 className='text-[14px] font-normal  text-gray-600'> {details?.cgst}
              </h1>
            </div>
            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-normal  text-gray-600'>SGST (9%) </h1>
              <h1 className='text-[14px] font-normal  text-gray-600'>  {details?.sgst}
              </h1>
            </div>

            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-semibold  text-gray-600'> Online Amt Paid </h1>
              <div className='flex flex-row justify-between'>   <h1 className='text-[14px] font-normal mt-1  text-gray-600'><MdOutlineCurrencyRupee />
              </h1>
                <h1 className='text-[14px] font-normal  text-gray-600'>{details?.totalPrice}
                </h1></div>
            </div>
          </div>

          <div className='  m-2'>
            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-normal  text-gray-600'>Exceed Time </h1>
              <h1 className='text-[14px] font-normal  text-gray-600'> {details.exceedTime} min
              </h1>
            </div>
            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-normal  text-gray-600'>AddOn Amt </h1>

              <div className='flex flex-row justify-between'>   <h1 className='text-[14px] font-normal mt-1  text-gray-600'><MdOutlineCurrencyRupee />
              </h1>
                <h1 className='text-[14px] font-normal  text-gray-600'>{Math.round(details.exceedPrice)}
                </h1></div>
            </div>
            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-normal  text-gray-600'>CGST (9%) </h1>

              <h1 className='text-[14px] font-normal  text-gray-600'> {details.exceedSGST}
              </h1>
            </div>
            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-normal  text-gray-600'>SGST (9%) </h1>
              <h1 className='text-[14px] font-normal  text-gray-600'> {details.exceedSGST}
              </h1>
            </div>
            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-normal  text-gray-600'>Total Amt </h1>
              <div className='flex flex-row justify-between'>   <h1 className='text-[14px] font-normal mt-1  text-gray-600'><MdOutlineCurrencyRupee />
              </h1>
                <h1 className='text-[14px] font-normal  text-gray-600'>{details?.totalPrice}
                </h1></div>
            </div>
            <div className='flex flex-row justify-between' >
              <h1 className='text-sm font-semibold  text-gray-600'>To be Paid </h1>
              <div className='flex flex-row justify-between'>   <h1 className='text-[14px] font-normal mt-1  text-gray-600'><MdOutlineCurrencyRupee />
              </h1>
                <h1 className='text-[14px] font-normal  text-gray-600'>{Math.round(details?.exceedTotalPrice)}
                </h1></div>
            </div>
          </div>
          <h1 className='font-light text-sm text-center text-gray-400'>GEMBA SMART PARKING</h1>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <ReactToPrint trigger={() => <button onClick={print} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Print</button>} content={() => compRef.current} />
        <button onClick={() => navigate(`/${details.parking}/CompletedBooking`)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Close</button>
      </div>
    </>

  )
}

export default Ereciept
