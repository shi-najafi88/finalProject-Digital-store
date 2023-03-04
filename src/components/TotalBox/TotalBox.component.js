import React from 'react'
import { Box } from '../Box/Box.component'
import './TotalBox.scss'

export const TotalBox = () => {
  return (
    <div className='wrapperBox'>
      <Box title={'مجموع سفارشات'} number={1300} boxStatus={'totalOrder'} />
      <Box title={'مجموع قیمت'} number={1300} boxStatus={'totalPrice'}/>
      <Box title={'مجموع فروش'} number={1300} boxStatus={'totalSales'}/>
    </div>
  )
}
