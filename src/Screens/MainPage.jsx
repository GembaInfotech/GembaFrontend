import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>

        <Link to={"/login/auth/vendor"}>
   <h1>     Login as a Vendor</h1>
        </Link>
        <Link to={"login/auth/gaurd"}>
        <h1>Login as a Gaurd</h1>
        </Link>
    </div>
  )
}

export default MainPage