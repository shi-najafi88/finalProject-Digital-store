import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalCheckOrder, RadioFilter, Table, TotalBox } from "../../../components";
import { DashboardHeader, DashboardSidebar } from "../../../dashboardLayouts";
import { usePagination } from "../../../hook";
import { DATAORDER } from "../../../redux/slices/index";
import "./Orders.scss";

export const Orders = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.shopp)
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } = usePagination(1,5);
  const [deliver, setDelivred] = useState(false)


  const getData = (currentPage, rowsPerPage,deliver)=> {
   
    axios.get(`http://localhost:3002/orders?delivered=${!deliver}&_page=${currentPage}&_limit=${rowsPerPage}`)
    .then(res => dispatch(DATAORDER(res.data)) )  
  }

  const dataPagination = (rowsPerPage) => {
    axios.get('http://localhost:3002/orders').then(res=> setTotalPages(Math.ceil(res.data.length/rowsPerPage)) )  
 }

 //for filtering
 const ChekedRadioOne = ()=> {
  setDelivred(false)
 }

 const ChekedRadioTwo = ()=> {
  setDelivred(true)
 }

  //show getdata for table
  useEffect(()=>{
    getData(currentPage, rowsPerPage, deliver)  
  },[dispatch,currentPage,deliver])


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
            <h3>مدیریت سفارشات</h3>
            <div className="wrapper_RadioFilter">
              
              <RadioFilter changed={ChekedRadioOne} title={"سفارشات تحویل شده"} cheked={!deliver}/>
              <RadioFilter
              cheked={deliver}
              changed={ChekedRadioTwo}
              title={"سفارشات در انتظار ارسال "}
               
              />
            </div>
          </div>
            <Table tableStatus={'tableOrder'} titleOne={'نام کاربر'} titleTwo={'مجموع قیمت'} titleThree={'زمان ثبت سفارش'} titleFour={'وضعیت'}  />
            <div className='wrapper-pagination'>{renderPaginationButtons()}</div> 
        </section>
      </div>
      {state.modalCheckOrder && (<ModalCheckOrder/>)}
    </div>
  );
};
