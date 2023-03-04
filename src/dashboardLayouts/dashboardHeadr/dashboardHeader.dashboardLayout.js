import React from 'react'
import { GoSearch } from 'react-icons/go';
import { Input } from '../../components';
import logo from '../../asets/images/logo.png'
import './dashboardHeader.scss'

export const DashboardHeader = () => {
  return (
    <div className='container_headerDashboard'>
        <div className='wrapper_dashboardSearch'>
            <Input placeholder={"جستجو ..."} stateInput={'dashboard_search'} type={'search'} />
            <div className='search_icon'><GoSearch style={{color:'white'}}/></div>
        </div>
        <img src= {logo} />
    </div>
  )
}
