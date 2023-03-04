import React from 'react'
import { RiHomeGearFill } from 'react-icons/ri'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { MdPriceCheck } from 'react-icons/md';
import { FaProductHunt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './dashboardSidebar.scss'

export const DashboardSidebar = () => {
  return (
    <div className='dashboard_sidebar'>
        <h3>پنل مدیریت فروشگاه</h3>
        <div className='wrapper_item'>
            <RiHomeGearFill style={{fontSize:'1.3rem'}}/>
            <Link className='link' to="/">خانه</Link>    
        </div>

        <div className='wrapper_item'>
            <AiOutlineUnorderedList style={{fontSize:'1.3rem'}}/>
            <Link className='link' to="/loginDashbord/dashbordOrders">سفارشات</Link>    
        </div>

        <div className='wrapper_item'>
            <MdPriceCheck style={{fontSize:'1.3rem'}}/>
            <Link className='link' to="/loginDashbord/dashbordInventory">موجودی و قیمت ها</Link>    
        </div>

        <div className='wrapper_item'>
            <FaProductHunt style={{fontSize:'1.3rem'}}/>
            <Link className='link' to="/loginDashbord/dashbord/ProductsDashbord">کالاها</Link>    
        </div>
    </div>
  )
}
