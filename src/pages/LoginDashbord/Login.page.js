import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components'

export const Login = () => {
  return (
    <div>
      <Link className='link' to="/loginDashbord/dashbord"><Button title={'ورود'}></Button></Link>
      <h1>this is a login dashbord page</h1>
    </div>
  )
}
