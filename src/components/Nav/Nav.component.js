
import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiHomeGearFill } from 'react-icons/ri'
import {MdShoppingCart } from 'react-icons/md'

export const Nav = () => {
  return (
    <nav className='nav'>
      <Link className='link' to="/products"><GiHamburgerMenu/> دسته بندی محصولات</Link>
      <Link className='link' to="/"><RiHomeGearFill/>خانه</Link>
      <Link className='link' exact to="/basket"><MdShoppingCart/> سبد خرید</Link>
    </nav>
  )
}
