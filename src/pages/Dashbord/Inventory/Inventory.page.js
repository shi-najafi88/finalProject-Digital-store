import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, TotalBox, Button } from '../../../components'
import { DashboardHeader, DashboardSidebar } from '../../../dashboardLayouts'
import { usePagination } from '../../../hook'
import { DATATABEL } from '../../../redux/slices'
import './Inventory.scss'

export const Inventory = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.shopp)
  const [disableBtn , setDisableBtn] = useState(true)
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } = usePagination(1,5);

  const getAll = () => {
    axios.get(`http://localhost:3002/products?_page=${state.getPage}&_limit=${5}`)
    .then(res => dispatch(DATATABEL(res.data)))
  }

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

  //edit price btn
  const editBtnPrice_handler = () => {
    
    let data = state.priceChange
    axios.patch(`http://localhost:3002/products/${state.productId}`,{
      price:data
    })  
    .then()
    getAll()
  }

  //quantity
  const quantitytBtn_handler = () => {
    let data = state.quantityChange
    axios.patch(`http://localhost:3002/products/${state.productId}`,{
    quantity:data
    })  
    .then()
    getAll()
   
  }

  const editPrice_Quantity_handler =() => {
    if(state.priceChangeMood){
      editBtnPrice_handler()
    }else if(state.quantityChange){
      quantitytBtn_handler()
    }
  }

  // useEffect(()=>{
  //   if(state.priceChangeMood){

  //     setDisableBtn(false)
  //     editBtnPrice_handler()
  
  //   }else if( state.quantityChangeMood){
  
  //     setDisableBtn(false)
  //     editBtnQuantity_handler()
     
  //   }
  // },[])

 
    

return (
   
<div className="container_orders">
      <DashboardHeader />
      <div className="container_main_side_dashboard">
        <DashboardSidebar />
        <section className="main-dashboard">
          <TotalBox />

          <div className="wrapper_mangement_order">
            <h3>مدیریت موجودی و قیمت ها</h3>
            <input onClick={editPrice_Quantity_handler} className={disableBtn ? 'editPriceDisable' : 'editPriceEnable'} value={'ذخیره'} disabled={disableBtn}/>   
          </div>  
             
            <Table tableStatus={'tableInventori'} titleOne={'کالا'} titleTwo={'قیمت'} titleThree={'موجودی'} />
            <div className='wrapper-pagination'>{renderPaginationButtons()}</div> 
        </section>
      </div>   
    </div>
   
  )
}
