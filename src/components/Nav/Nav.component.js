
import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
        <Link className='link' to="/">خانه</Link>
        <Link className='link' exact to="/basket">سبد خرید</Link>
        <Link className='link' to="/loginDashbord"> مدیریت</Link>
    </nav>
  )
}
