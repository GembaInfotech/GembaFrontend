import React from 'react'

function ActionButton({name}) {
  return (
   <>
   <h1 className='bg-blue-600 p-1 px-2 rounded-md w-fit text-white font-semibold hover:bg-blue-600  text-sm'>{name}</h1>
   </>
  )
}

export default ActionButton