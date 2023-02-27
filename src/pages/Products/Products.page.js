import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../../components'

export const Products = () => {
  return (
    <div>
      <Nav/>
      <Link className='link' to="/products/productDetail">محصول</Link>
      <h1>this is a Products page</h1>
    </div>
  )
}
