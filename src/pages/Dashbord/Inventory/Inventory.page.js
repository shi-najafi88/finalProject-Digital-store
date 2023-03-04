import React from 'react'
import { Link } from 'react-router-dom'
import { Table, TotalBox, Button } from '../../../components'
import { DashboardHeader, DashboardSidebar } from '../../../dashboardLayouts'

export const Inventory = () => {
  return (
    <div>

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
         
            <Table tableStatus={'tableOrder'} titleOne={'نام کاربر'} titleTwo={'مجموع قیمت'} titleThree={'زمان ثبت سفارش'} titleFour={'وضعیت'}  />

        </section>

      </div>
      
    </div>
    </div>
  )
}
