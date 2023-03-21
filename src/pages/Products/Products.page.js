import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { CardOne, CardTwo } from '../../components'
import { usePagination } from '../../hook'
import { Footer, Header, Sidebar } from '../../layouts'
import { CURRENTPAGE, DATATABEL } from '../../redux/slices'
import './Products.scss'

export const Products = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.shopp)
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } = usePagination(1,6);
  const params = useParams()
  let name = params.categoryname

  const getByCategory = (name) =>{
    axios.get(`http://localhost:3002/products?categoryname=${name}&_page=${currentPage}&_limit=${rowsPerPage}`)
    .then(res => dispatch(DATATABEL(res.data)))
  }

  const dataPagination = (rowsPerPage) => {
    axios.get(`http://localhost:3002/products?categoryname=${name}`)
    .then(res=> setTotalPages(Math.ceil(res.data.length/rowsPerPage)))
  }

  useEffect(()=>{
    dispatch(CURRENTPAGE(currentPage))
    getByCategory(name)
    dataPagination(rowsPerPage)
  },[currentPage,name])

  return (
    <div>
      <Header/>

      <section className='containet-main-product'>

        <div className='wrraper-main-product'>
          <Sidebar name={name}/>
          <main>
            {state.listData.map(item=>(
              item.categoryname === 'موبایل' || item.categoryname === 'تبلت' ?
              <CardOne item={item}/>:
              <CardTwo item={item}/>  
            ))}
          </main>
        </div>
        
        <div className='wrapper-pagination'>{renderPaginationButtons()}</div>
      </section>
      <Footer/>

      {/* <Link className='link' to="/products/productDetail">محصول</Link> */}
    </div>
  )
}
