import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DATAORDERS } from '../../redux/slices';
import { Box } from '../Box/Box.component'
import './TotalBox.scss'

export const TotalBox = () => {

  const state = useSelector(state => state.shopp);
  const dispatc = useDispatch()

  //state for save data Boxes
  const [totalOrder,setTotalOrder] = useState(0)
  const [totalSail,setTotalSail] = useState(0)
  

  const getOrdersData = ()=> {
    let totalOrders = 0
    let totalPrices = 0

    axios.get('http://localhost:3002/orders')
    .then(res => dispatc(DATAORDERS(res.data) ))  

    state.ordersData.map(item=>{
      totalOrders += item.products.length // box total orders
      totalPrices += item.prices  //box total sailes
    })
    
    setTotalOrder(totalOrders)
    setTotalSail(totalPrices) 
  }

  useEffect(()=>{
    getOrdersData()
  },[])
  
  return (
    <>
    <div className='wrapperBox'>  
          <Box title={'مجموع سفارشات'} number={totalOrder.toLocaleString("fa")} boxStatus={'totalOrder'} />
          <Box title={'تعداد مشتری'} number={state.ordersData.length.toLocaleString("fa")} boxStatus={'totalPrice'}/>
          <Box title={'مجموع فروش'} number={totalSail.toLocaleString("fa")} boxStatus={'totalSales'}/>
    </div>
    </>
  )
}
