
import React, { useEffect, useState } from 'react'
import { Button, ModalDashboard, ModalDelet, Table, TotalBox } from '../../../components'
import { DashboardHeader, DashboardSidebar } from '../../../dashboardLayouts'
import { useDispatch, useSelector } from 'react-redux'
import { DATATABEL, OPEN_MODAL } from '../../../redux/slices'
import { usePagination } from '../../../hook'
import axios from 'axios'
import './ProductsDashboard.scss'


export const ProductsDashbord = () => {
 
  const dispatch = useDispatch()
  const state = useSelector(state => state.shopp)
  const [selectValue , setSelectValue] = useState('')
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } = usePagination(1,5);
              
 
  //fetch get data for product table and send all products for state
  const getData = (currentPage,rowsPerPage)=> {
    axios.get(`http://localhost:3002/products?_page=${currentPage}&_limit=${rowsPerPage}`)
    .then(res => dispatch(DATATABEL(res.data)))
  }

  //fetch data for filter category
  const getByCategory = (name) =>{
    axios.get(`http://localhost:3002/products?categoryname=${name}&_page=${currentPage}&_limit=${rowsPerPage}`)
    .then(res => dispatch(DATATABEL(res.data)))
  }


  const dataPagination = (rowsPerPage) => {
     if(!selectValue || selectValue === 'همه'){
      axios.get('http://localhost:3002/products').then(res=> setTotalPages(Math.ceil(res.data.length/rowsPerPage)) ) 
    }else{
      axios.get(`http://localhost:3002/products?categoryname=${selectValue}`).then(res=> setTotalPages(Math.ceil(res.data.length/rowsPerPage)))
    }
  }

  
  //show data on table
  useEffect(()=>{
    
    if(!selectValue || selectValue === 'همه'){
      getData(currentPage,rowsPerPage) 
    }else{
      getByCategory(selectValue)
    }
     
  },[dispatch,currentPage,selectValue])

  
  useEffect(()=>{
    dataPagination(rowsPerPage)  
  },[selectValue])
 
  //click add product open modal
  const OpenModal_handler = ()=> {
    dispatch(OPEN_MODAL())
  }

  const FilterHandler = (e) => {
    setSelectValue(e) 
  }

  return (
    <div className="container_orders">
      <DashboardHeader />
      <div className="container_main_side_dashboard">
        <DashboardSidebar />
        <section className="main-dashboard">
          <TotalBox />

          <div className="wrapper_mangement_order">
            <h3>مدیریت کالاها</h3>
            <Button clicked={OpenModal_handler} title={'افزودن کالا'} stateBtn={'addProduct'} />   
          </div>  
             
            <Table onFilterHandler={(e)=>FilterHandler(e)} tableStatus={'tableProduct'} titleOne={'تصویر'} titleTwo={'نام کالا'} titleThree={'دسته بندی'} titleFour={'وضعیت'} />
            <div className='wrapper-pagination'>{renderPaginationButtons()}</div>         
        </section>
      </div> 

      {/* show edit modal when click add product btn */}
      {state.modalEdit && (<ModalDashboard/>)}

      {/* show delet modal when click trash icon */}
      {state.modalDelet && (<ModalDelet/>)}

</div>
  )
}
