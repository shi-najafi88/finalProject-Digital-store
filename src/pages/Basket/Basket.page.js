import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Nav, Table } from '../../components'
import { Footer, Header } from '../../layouts'
import './Basket.scss'

export const Basket = () => {
  return (
    <div className='container-cart'>
      <Header/>
      <main>
          <Table tableStatus={'tableCart'} titleOne={'تصویر'} titleTwo={'کالا'} titleThree={'قیمت'} titleFour={'تعداد'} titleFive={'حذف'} />
          <div className='wrapper-finalCart-btn'>
            <div className='wrapper-totalPrice'>
              <span>جمع کل:</span>
              <span> تومان</span>
            </div>
            <Link className='link' to="/basket/register"><Button title={'نهایی کردن سبد خرید'} stateBtn={'basket'}/></Link>
          </div>
      </main>
      <Footer/>
      
    </div>
  )
}
