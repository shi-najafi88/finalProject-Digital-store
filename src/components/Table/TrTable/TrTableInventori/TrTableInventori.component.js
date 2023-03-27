import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DATATABEL, PRICECHANGE, PRICEPRODUCTID, QUANTITYCHANGE, QUANTITYPRODUCTID } from '../../../../redux/slices'
import "./TrTableInventori.scss"

export const TrTableInventori = ({item}) => {

  const state = useSelector(state => state.shopp)
  const[priceMood,setPriceMood] = useState(false)
  const[quantityMood,setquantityMood] = useState(false)

  // const state = useSelector(state => state.shopp);
  const dispatch = useDispatch()

  //for chanhe input & span tag
  const handlerPriceData = (id)=> {
    setPriceMood(true)
    dispatch(PRICEPRODUCTID(id))
  }

  const handlerQuantityData = (id)=> {
    setquantityMood(true)
    dispatch(QUANTITYPRODUCTID(id))
  }

  //change price
  const PriceChangeHandler = (e,item)=> {
    const editedItem = {...item,price:e.target.value}
    dispatch(PRICECHANGE(editedItem))
  }

  //change quantity
  const QuantityChangeHandler = (e,item)=> {
    const editedItem = {...item,quantity:e.target.value}
    dispatch(QUANTITYCHANGE(editedItem))
  }

  return (
    <tr>
       <td className='inventori_first_td'>{item.name}</td>

       <td className='inventori_td'>
        {!priceMood ? 
        <span onClick={()=>handlerPriceData(item.id)}>{(+item.price).toLocaleString("fa")}</span>:
        <input onChange={(e)=>PriceChangeHandler(e,item)} className='inputInventori' 
        type={'text'} placeholder={(+item.price).toLocaleString("fa")}/> 
        } 
        </td>

       <td className='inventori_td'>
        {!quantityMood ? 
        <span onClick={()=>handlerQuantityData(item.id)}>{(+item.quantity).toLocaleString("fa")}</span>:
        <input onChange={(e)=>QuantityChangeHandler(e,item)} className='inputInventori' 
        type={'text'} placeholder={(+item.quantity).toLocaleString("fa")} /> 
        } 
        </td> 
    </tr>
  )
}
