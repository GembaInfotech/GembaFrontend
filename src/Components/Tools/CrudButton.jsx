import React from 'react'

function CrudButton({name}) {
  return (
   <>
   <h1 className='bg-yellow-400 px-4  py-1.5 rounded-md w-fit m-1 text-black font-semibold hover:bg-yellow-500 text-sm '>{name}</h1>
   </>
  )
}

export default CrudButton