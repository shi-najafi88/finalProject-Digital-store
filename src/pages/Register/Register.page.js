import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Nav } from '../../components'

export const Register = () => {
  return (
    <div>
        <Nav/>
        <Link className='link' to="/basket/register/payment"><Button title={'پرداخت'}></Button></Link>
        <h1>this is a register page</h1>
    </div>
  )
}
