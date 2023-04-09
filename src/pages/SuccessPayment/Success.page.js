import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Success = () => {
  const params = useParams()
  console.log(params);
  return (
    <div>
      <Link className='link' to="/loginDashbord"> مدیریت</Link>
      <h1>this is a success payment page</h1>
    </div>
  )
}
