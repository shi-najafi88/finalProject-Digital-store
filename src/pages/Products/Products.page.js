import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header, Sidebar } from '../../layouts'
import './Products.scss'

export const Products = () => {
  const params = useParams()
  console.log(params.categoryname);
  return (
    <div>

      <Header/>

      <section className='containet-main-product'>
        <Sidebar/>
      </section>

     
      
      {/* <Link className='link' to="/products/productDetail">محصول</Link> */}
    </div>
  )
}
