import React from 'react'

function CrudButton({name}) {
  return (
   <>
   <h1 className='bg-yellow-400 px-2  py-1 rounded-md w-fit text-black font-semibold hover:bg-yellow-500 text-sm '>{name}</h1>
   </>
  )
}

export default CrudButton