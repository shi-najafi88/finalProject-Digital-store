import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Nav } from '../../components'

export const Products = () => {
  const params = useParams()
  console.log(params.categoryname);
  return (
    <div>
      <Nav/>
      <Link className='link' to="/products/productDetail">محصول</Link>
      <h1>this is a Products page</h1>
    </div>
  )
}
