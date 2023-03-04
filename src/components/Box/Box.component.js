import React from 'react'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { FcSalesPerformance } from 'react-icons/fc'
import { RiShoppingBasketFill } from 'react-icons/ri'
import './Box.scss'

export const Box = ({boxStatus, title, number}) => {

  return (
     
   <div className='box'>

      {boxStatus === 'totalOrder' ?
        <AiOutlineOrderedList style={{color:'#7725d1', fontSize:'1.6rem'}}/> :
      boxStatus === 'totalPrice' ?
        <FcSalesPerformance style={{fontSize:'1.6rem'}}/> :
        <RiShoppingBasketFill style={{color:'#d95b44',fontSize:'1.6rem'}}/> 
      }
      
      <div className='wrapper_dataBox'>
        <span className='title'>{title}</span>
        <span className='number'>{` ${number}`}</span>
      </div>
    </div>

  )
}
