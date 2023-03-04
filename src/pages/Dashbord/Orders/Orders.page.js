import React from "react";
import { PaginatedItems, RadioFilter, Table, TotalBox } from "../../../components";
import { DashboardHeader, DashboardSidebar } from "../../../dashboardLayouts";
import "./Orders.scss";

export const Orders = () => {
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

          
            

        </section>

      </div>
      
    </div>
  );
};
