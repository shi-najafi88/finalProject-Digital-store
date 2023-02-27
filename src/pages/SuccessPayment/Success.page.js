import React from 'react'
import { Link } from 'react-router-dom'

export const Success = () => {
  return (
    <div>
      <Link className='link' to="/loginDashbord"> مدیریت</Link>
      <h1>this is a success payment page</h1>
    </div>
  )
}
