import React from 'react'
import { Input } from '../../../Input/Input.component'
import "./TrTableInventori.scss"

export const TrTableInventori = ({item}) => {
  return (
    <tr>
       <td className='inventori_first_td'>{item.name}</td>
       <td className='inventori_td'><input className='inputInventori' type={'text'} value={item.price} />تومان</td>
       <td className='inventori_td'><input className='inputInventori' type={'text'} value={item.quantity}/></td> 
    </tr>
  )
}
