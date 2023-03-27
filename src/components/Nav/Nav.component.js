
import React, { useEffect } from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiHomeGearFill } from 'react-icons/ri'
import {MdShoppingCart } from 'react-icons/md'
import { useSelector } from 'react-redux'

export const Nav = () => { 

  const state = useSelector(state => state.shopp);

  return (
    <nav className='nav'>
      <Link className='link' to="/products/موبایل"><GiHamburgerMenu style={{fontSize:'1.2rem'}}/> دسته بندی محصولات</Link>
      <Link className='link' to="/"><RiHomeGearFill style={{fontSize:'1.2rem'}}/>خانه</Link>
      <Link className='link' exact to="/basket">
        <div className='wrapper-batch'>
          <span className='batchCart'>
            {state.cartProductArray.length.toLocaleString("fa")}
          </span>
          <MdShoppingCart style={{fontSize:'1.2rem'}}/>
        </div> سبد خرید</Link>
    </nav>
  )
}
