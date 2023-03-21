import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { CardOne } from '../../components'
import { Header, Sidebar } from '../../layouts'
import { DATATABEL } from '../../redux/slices'
import './Products.scss'

export const Products = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.shopp)
  const params = useParams()
  let name = params.categoryname

  const getByCategory = (name) =>{
    axios.get(`http://localhost:3002/products?categoryname=${name}`)
    .then(res => dispatch(DATATABEL(res.data)))
  }

  useEffect(()=>{
    getByCategory(name)
  },[name])

  
  return (
    <div>
      <Header/>

      <section className='containet-main-product'>
        <Sidebar name={name}/>
        <main>
          {state.listData.map(item=>(
            <CardOne item={item}/>
          ))}
        </main>
      </section>

     
      
      {/* <Link className='link' to="/products/productDetail">محصول</Link> */}
    </div>
  )
}
