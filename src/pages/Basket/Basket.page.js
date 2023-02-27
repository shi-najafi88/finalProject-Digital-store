import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Nav } from '../../components'

export const Basket = () => {
  return (
    <div>
      <Nav/>
      <Link className='link' to="/basket/register"><Button title={'نهایی کردن سبد خرید'}></Button></Link>
      <h1>this is a basket page</h1>
    </div>
  )
}
