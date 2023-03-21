import React from 'react'
import { Link } from 'react-router-dom'
import{ ImMobile } from 'react-icons/im'
import './sidebar.scss'
import { AiOutlineLaptop } from 'react-icons/ai'
import { FaTabletAlt } from 'react-icons/fa'
import { BsHeadset } from 'react-icons/bs'


export const Sidebar = ({name}) => {
  
  return (

    <div className='sidebar'>
        <h4>دسته بندی محصولات</h4>
        <div className={name==='موبایل'? 'active' : 'wrapper_item'} >
            <ImMobile style={{color:'white'}}/>
            <Link className='link' to={`/products/${'موبایل'}`}>موبایل</Link>    
        </div>

        <div className={name==='لپتاپ'? 'active' : 'wrapper_item'}>
            <AiOutlineLaptop style={{color:'white'}}/>
            <Link className='link' to={`/products/${'لپتاپ'}`}>لپتاپ</Link>    
        </div>

        <div className={name==='تبلت'? 'active' : 'wrapper_item'}>
            <FaTabletAlt style={{color:'white'}}/>
            <Link className='link' to={`/products/${'تبلت'}`}>تبلت</Link>    
        </div>

        <div className={name==='هدفون'? 'active' : 'wrapper_item'}>
            <BsHeadset style={{color:'white'}}/>
            <Link className='link' to={`/products/${'هدفون'}`}>هدفون</Link>    
        </div>
    </div>
  )
}
