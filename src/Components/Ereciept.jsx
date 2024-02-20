import React, {useRef} from 'react'
import { useParams } from 'react-router-dom';
import ReactToPrint from "react-to-print";

const Ereciept = ({print}) => {

  const { editedBooking } = useParams();
console.log(editedBooking)
  // Decode and parse the JSON data
  const compRef=useRef();

  return (
  
    <>
                                         <ReactToPrint trigger={()=> <button>Print</button>} content={()=>compRef.current} />
                                         <div  className='flex justify-center' >

<div ref={compRef}  className='lg:mx-w-content xl:mx-auto border border-black  ' >

<div className='flex flex-col justify-center items-center  mx-2'>
   <h1 className='text-sm font-semibold font-mono text-gray-700'>RITESH INTERNATIONAL PARKING </h1>
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

   </div>
 
  



 <div className='  m-2'>
   <div   className='flex flex-row justify-between' >
       <h1  className='text-sm font-normal  text-gray-600'>In Time </h1>
   <h1  className='text-[12px] font-normal  text-gray-600'>   09:15-02/02/2024
   </h1>

   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>Out Time </h1>


   <h1  className='text-[12px] font-normal  text-gray-600'>   09:15-02/02/2024
   </h1>
   </div>
  
 </div>

 <div className='  m-2'>
   <div   className='flex flex-row justify-between' >
       <h1  className='text-sm font-normal  text-gray-600'>Amount </h1>
   <h1  className='text-[14px] font-normal  text-gray-600'> j
   </h1>

   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>Tax (18%) </h1>


   <h1  className='text-[14px] font-normal  text-gray-600'>  1.8 Rs
   </h1>
   </div>

   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-semibold  text-gray-600'> Online Amt Paid </h1>


   <h1  className='text-[14px] font-normal  text-gray-600'>  editedBooking[bookingPrice]
   </h1>
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


   <h1  className='text-[14px] font-normal  text-gray-600'> Rs 6
   </h1>
   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>Tax (18%) </h1>


   <h1  className='text-[14px] font-normal  text-gray-600'>  0.9 Rs
   </h1>
   </div>

   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-normal  text-gray-600'>Total Amt </h1>


   <h1  className='text-[14px] font-normal  text-gray-600'>  19 Rs
   </h1>
   </div>
   <div   className='flex flex-row justify-between' >
   <h1  className='text-sm font-semibold  text-gray-600'>To be Paid </h1>


   <h1  className='text-[14px] font-normal  text-gray-600'>  7 Rs
   </h1>
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