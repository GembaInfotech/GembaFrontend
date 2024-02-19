import React from 'react'

const Reciept = () => {
  return (
  
     <div  className='flex justify-center' >
         <div >
        
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
            <h1  className='text-sm font-normal  text-gray-600'>   10 Rs
            </h1>

            </div>
            <div   className='flex flex-row justify-between' >
            <h1  className='text-sm font-normal  text-gray-600'>Tax (18%) </h1>


            <h1  className='text-sm font-normal  text-gray-600'>  1.8 Rs
            </h1>
            </div>

            <div   className='flex flex-row justify-between' >
            <h1  className='text-sm font-semibold  text-gray-600'>Total </h1>


            <h1  className='text-sm font-normal  text-gray-600'>  12 Rs
            </h1>
            </div>
           
           
          </div>

          <h1 className='font-light text-sm text-center text-gray-400'>GEMBA SMART PARKING</h1>

         

    </div>
     </div>

   
  )
}

export default Reciept