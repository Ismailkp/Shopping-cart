import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

 const Noresult = () => {
    const error=useRouteError()
    console.error(error)
  return (
    <div className='bg-gray-300' >
        <div className='m-0 items-center justify-center py-8 text-center'>
        <h4 >Please  Go back to Home Page No result Found, Click on below button It will Navigate you to Home Page </h4>
         <NavLink to='/'>
          <button className='p-2 bg-red-400 rounded-b-xl hover:text-xl' >Back To Home Page</button>
         </NavLink>
        </div>

    </div>
  )
}
export default Noresult;