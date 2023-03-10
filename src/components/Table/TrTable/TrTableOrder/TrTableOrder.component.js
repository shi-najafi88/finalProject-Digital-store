import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { COSTOMERDATA, OPEN_CheckOrderModal } from '../../../../redux/slices/index'
import './TrTableOrder.scss'

export const TrTableOrder = ({item}) => {
  

  const costomerData = (id) => {
  axios.get(`http://localhost:3002/orders?id=${id}`)
  .then(res => dispatch(COSTOMERDATA(res.data))) 
  }

  const dispatch = useDispatch() 
  
  //open modal checkorder
  const ChekOrder_handler = (id) =>{
    costomerData(id)
    dispatch(OPEN_CheckOrderModal())
  }

  return (  
    <tr >
      <td>{item.username +' '+ item.lastname}</td>
      <td>{item.prices.toLocaleString("fa")}</td>
      <td>
        {new Date(item.createdAt).toLocaleDateString("fa")}
      </td>
      <td><span className='checkOrder' onClick={()=>ChekOrder_handler(item.id)} style={{cursor:'pointer'}}>بررسی سفارشات</span></td>       
    </tr>   
  )
}
