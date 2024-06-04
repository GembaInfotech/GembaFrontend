import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function CrudButton({name}) {
  return (
   <>
   <h1 className='bg-blue-900  text-white  min-w-32 py-1 px-2 text-center rounded-md w-fit m-1 text-black  font-semibold hover:bg-yellow-500 text-[12px] '>{name}</h1>
   </>
  )
}

export default CrudButton