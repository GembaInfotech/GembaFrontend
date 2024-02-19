import React from 'react'

const Card = ({color, name}) => {
  return (
    <div className={` ${color} rounded-md flex h-36 w-56 p-4 m-2` }>
        <h1 className=' items-center text-align text-xl font-semibold text-gray-700'>{name}</h1>
    </div>
  )
}

export default Card