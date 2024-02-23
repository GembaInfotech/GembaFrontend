import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { PiCurrencyInr } from "react-icons/pi";

const Ereciept = () => {
  const { detail } = useParams();
  const decodedBooking = JSON.parse(decodeURIComponent(detail));

  const compRef = useRef();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [CGST,SCGST]= useState()

  useEffect(() => {
    setSelectedBooking(decodedBooking);
  
  }, [decodedBooking]);

  const print = () => {
    // Add your custom printing logic here
    // For example, you can use the ReactToPrint API to trigger printing
    // See: https://github.com/gregnb/react-to-print
    console.log('Printing:', selectedBooking);
  };
  return (
  
    <>
    <ReactToPrint trigger={() => <button onClick={print}>Print</button>} content={() => compRef.current} />
      <div className="flex justify-center">
<div ref={compRef}  className='lg:mx-w-content xl:mx-auto border border-black  ' >

<div className='flex flex-col justify-center items-center  mx-2'>
   <h1 className='text-sm font-semibold font-mono text-gray-700'>  {selectedBooking?.ParkingName} </h1>
   <h2  className='text-sm font-normal  text-gray-700'>365 INDUSTRIAL AREA -A</h2>
   <h3  className='text-sm font-normal  text-gray-700'>LUDHIANA</h3>

</div>

<div className='flex flex-col justify-center items-center  mx-2'>
   <h1  className='text-sm font-normal  text-gray-600'> <span>GSTIN</span> 03AAAVR87652N9V </h1>
  
  <div className='flex fle-col items-center'>
  <h1  className='text-sm font-normal  text-gray-600 mx-1'> <span>Licence No</span> ARQ-933432 </h1>
   <h1  className='text-sm font-normal  text-gray-600 mx-1'> <span>State Code</span> 03 </h1>
   </div>

  <h1 className='text-gray-400'>--------------------------</h1>

    <div className='flex fle-col items-center'>
    <h1  className='text-sm font-normal  text-gray-600 mx-1'> <span>Car Number</span> {selectedBooking?.CarNumber} </h1>
    </div>
   </div>
 
  


   
              
 <div className='  m-2'>
   <div   className='flex flex-row justify-between' >
       <h1  className='text-sm font-normal  text-gray-600'>In Time </h1>
   <h1  className='text-[12px] font-normal  text-gray-600'>   {new Date(  selectedBooking?.timeIn).toLocaleString()}
   </h1>

   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>Out Time </h1>


   <h1  className='text-[12px] font-normal  text-gray-600'>   {new Date(  selectedBooking?.timeOut).toLocaleString()}
   </h1>
   </div>
  
 </div>

 <div className='  m-2'>
   <div   className='flex flex-row justify-between' >
       <h1  className='text-sm font-normal  text-gray-600'>Amount </h1>
   
   <div   className='flex flex-row justify-between'>   <h1  className='text-[14px] font-normal mt-1  text-gray-600'><PiCurrencyInr />
   </h1>
   <h1  className='text-[14px] font-normal  text-gray-600'>{selectedBooking?.bookingPrice}
   </h1></div>
   
   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>CGST (9%) </h1>
   


   <h1  className='text-[14px] font-normal  text-gray-600'> {CGST}
   </h1>
   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>SGST (9%) </h1>
   


   <h1  className='text-[14px] font-normal  text-gray-600'>  {selectedBooking?.bookingPrice*9/100} 
   </h1>
   </div>

   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-semibold  text-gray-600'> Online Amt Paid </h1>


   <div   className='flex flex-row justify-between'>   <h1  className='text-[14px] font-normal mt-1  text-gray-600'><PiCurrencyInr />
   </h1>
   <h1  className='text-[14px] font-normal  text-gray-600'>{selectedBooking?.bookingPrice}
   </h1></div>
   
   </div>
  
  
 </div>

 <div className='  m-2'>
   <div   className='flex flex-row justify-between' >
       <h1  className='text-sm font-normal  text-gray-600'>Exceed Time </h1>
   <h1  className='text-[14px] font-normal  text-gray-600'>  47 min
   </h1>

   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>AddOn Amt </h1>


   <div   className='flex flex-row justify-between'>   <h1  className='text-[14px] font-normal mt-1  text-gray-600'><PiCurrencyInr />
   </h1>
   <h1  className='text-[14px] font-normal  text-gray-600'>5
   </h1></div>
   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>CGST (9%) </h1>
   


   <h1  className='text-[14px] font-normal  text-gray-600'> 0.54
   </h1>
   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>SGST (9%) </h1>
   


   <h1  className='text-[14px] font-normal  text-gray-600'> 0.54
   </h1>
   </div>

   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>Total Amt </h1>


   <div   className='flex flex-row justify-between'>   <h1  className='text-[14px] font-normal mt-1  text-gray-600'><PiCurrencyInr />
   </h1>
   <h1  className='text-[14px] font-normal  text-gray-600'>56
   </h1></div>
   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-semibold  text-gray-600'>To be Paid </h1>


   <div   className='flex flex-row justify-between'>   <h1  className='text-[14px] font-normal mt-1  text-gray-600'><PiCurrencyInr />
   </h1>
   <h1  className='text-[14px] font-normal  text-gray-600'>8  
   </h1></div>
   </div>
  
  
 </div>

<h1 className='font-light text-sm text-center text-gray-400'>GEMBA SMART PARKING</h1>

</div>

<button className='hidden ' onClick={print}></button>
</div>
</>


   
  )
}

export default Ereciept