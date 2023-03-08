import React from 'react'
import { useDispatch } from 'react-redux'
import { OPEN_CheckOrderModal } from '../../../../redux/slices/index'
import './TrTableOrder.scss'

export const TrTableOrder = ({item}) => {
  const dispatch = useDispatch() 
  
  //open modal checkorder
  const ChekOrder_handler = () =>{
    dispatch(OPEN_CheckOrderModal())
  }

  return (  
    <tr >
      <td>{item.username +' '+ item.lastname}</td>
      <td>{item.prices}</td>
      <td>
        {new Date(item.createdAt).toLocaleDateString("fa")}
      </td>
      <td><span className='checkOrder' onClick={ChekOrder_handler} style={{cursor:'pointer'}}>بررسی سفارشات</span></td>       
    </tr>   
  )
}
