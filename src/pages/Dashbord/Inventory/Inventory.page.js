import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, TotalBox, Button } from '../../../components'
import { DashboardHeader, DashboardSidebar } from '../../../dashboardLayouts'
import { usePagination } from '../../../hook'
import { DATATABEL } from '../../../redux/slices'

export const Inventory = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.shopp)
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } = usePagination(1,5);

  const getData = (currentPage,rowsPerPage)=> {
    axios.get(`http://localhost:3002/products?_page=${currentPage}&_limit=${rowsPerPage}`)
    .then(res => dispatch(DATATABEL(res.data)))
  }
  
  const dataPagination = (rowsPerPage) => {
     axios.get('http://localhost:3002/products').then(res=> setTotalPages(Math.ceil(res.data.length/rowsPerPage)) )  
  }

  
  //show getdata for table
  useEffect(()=>{
    getData(currentPage,rowsPerPage)  
  },[dispatch])

  //show getdata for pagination
  useEffect(()=>{
    getData(currentPage,rowsPerPage) 
  },[currentPage])

  useEffect(()=>{
    dataPagination(rowsPerPage)
  },[])
 

  return (
   
<div className="container_orders">
      <DashboardHeader />
      <div className="container_main_side_dashboard">
        <DashboardSidebar />
        <section className="main-dashboard">
          <TotalBox />

          <div className="wrapper_mangement_order">
            <h3>مدیریت موجودی و قیمت ها</h3>
            <Button title={'ذخیره'} stateBtn={'editPrice'} />   
          </div>  
             
            <Table tableStatus={'tableInventori'} titleOne={'کالا'} titleTwo={'قیمت'} titleThree={'موجودی'} />
            <div className='wrapper-pagination'>{renderPaginationButtons()}</div> 
        </section>
      </div>   
    </div>
   
  )
}
