import React from 'react'

function ActionButton({name}) {
  return (
   <>
   <h1 className='bg-gray-800 px-4 py-1 mx-1 rounded-md w-fit text-white font-normal hover:bg-black  text-sm'>{name}</h1>
   </>
  )
}

export default ActionButton