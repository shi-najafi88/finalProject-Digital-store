import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DATATABEL, PRICECHANGE, PRICEPRODUCTID, QUANTITYCHANGE, QUANTITYPRODUCTID } from '../../../../redux/slices'
import "./TrTableInventori.scss"

export const TrTableInventori = ({item}) => {

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

  const HandelBackSpanPrice = () => {
    setPriceMood(false)
  }

  const HandelBackSpanQuantity = () => {
    setquantityMood(false)
  }

  //change price
  const PriceChangeHandler = (e)=> {
   
    dispatch(PRICECHANGE(e.target.value))

  }

  //change quantity
  const QuantityChangeHandler = (e)=> {

    dispatch(QUANTITYCHANGE(e.target.value))
  }
    

  return (
    <tr>
       <td className='inventori_first_td'>{item.name}</td>

       <td className='inventori_td'>
        {!priceMood ? 
        <span onClick={()=>handlerPriceData(item.id)}>{(+item.price).toLocaleString("fa")}</span>:
        <input onChange={PriceChangeHandler} onBlur={HandelBackSpanPrice} className='inputInventori' type={'text'} /> 
        } 
        </td>

       <td className='inventori_td'>
        {!quantityMood ? 
        <span onClick={()=>handlerQuantityData(item.id)}>{(+item.quantity).toLocaleString("fa")}</span>:
        <input onChange={QuantityChangeHandler} onBlur={HandelBackSpanQuantity} className='inputInventori' type={'text'} /> 
        } 
        </td> 
    </tr>
  )
}
