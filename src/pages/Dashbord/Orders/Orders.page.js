import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalCheckOrder, RadioFilter, Table, TotalBox } from "../../../components";
import { DashboardHeader, DashboardSidebar } from "../../../dashboardLayouts";
import { usePagination } from "../../../hook";
import { DATAORDER, DATATABEL } from "../../../redux/slices";
import "./Orders.scss";

export const Orders = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.shopp)
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } = usePagination(1,5);

  const getData = ()=> {
    axios.get('http://localhost:3002/orders')
    .then(res => dispatch(DATAORDER(res.data)))
  }
 
  //show getdata for table
  useEffect(()=>{
    getData()  
  },[dispatch])

  

 

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
              <RadioFilter title={"سفارشات تحویل شده"} />
              <RadioFilter
                title={"سفارشات در انتظار ارسال "}
                cheked={"cheked"}
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
