import React from 'react'
import img from '../../assets/404-statusCode.png'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

<Link to="/">
<button className='text-2xl font-semibold mt-72 text-blue-700 underline'>Return to Home </button>

</Link>
    </div>

  )
}

export default NotFound