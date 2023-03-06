
import React from 'react'
import { Button, ModalDashboard, ModalDelet, PaginatedItems, Table, TotalBox } from '../../../components'
import { DashboardHeader, DashboardSidebar } from '../../../dashboardLayouts'
import { useDispatch, useSelector } from 'react-redux'
import { OPEN_MODAL } from '../../../redux/slices'


export const ProductsDashbord = () => {
  
  const dispatch = useDispatch()
  const state = useSelector(state => state.shopp)

  //click add product open modal
  const OpenModal_handler = ()=> {
    dispatch(OPEN_MODAL())
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
             
            <Table tableStatus={'tableProduct'} titleOne={'تصویر'} titleTwo={'نام کالا'} titleThree={'دسته بندی'} titleFour={'وضعیت'} />
            {/* <PaginatedItems itemsPerPage={4} /> */}
        </section>
      </div> 

      {/* show edit modal when click add product btn */}
      {state.modalEdit && (<ModalDashboard/>)}

      {/* show delet modal when click trash icon */}
      {state.modalDelet && (<ModalDelet/>)}


</div>
  )
}
