import React from 'react'
import { Input } from '../../../Input/Input.component'
import "./TrTableInventori.scss"

export const TrTableInventori = ({item}) => {

  const priceHandler = (e)=> {
    
   
    console.log(e.target.value);
  }
  return (
    <tr>
       <td className='inventori_first_td'>{item.name}</td>
       <td className='inventori_td'><input onChange={priceHandler} onFocus={(e)=>e.target.value=''} className='inputInventori' type={'text'} value={item.price.toLocaleString("fa")} />تومان</td>
       <td className='inventori_td'><input className='inputInventori' type={'text'} value={item.quantity.toLocaleString("fa")}/></td> 
    </tr>
  )
}
