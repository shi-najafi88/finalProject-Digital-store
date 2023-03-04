import React from 'react'
import { Input } from '../../../Input/Input.component'
import "./TrTableInventori.scss"

export const TrTableInventori = () => {
  return (
    <tr>
       <td className='inventori_first_td'>yyyy</td>
       <td className='inventori_td'><Input stateInput={'inputInventori'} type={'text'} val={`${200} تومان`}/></td>
       <td className='inventori_td'><Input stateInput={'inputInventori'} type={'text'} val={100}/></td> 
    </tr>
  )
}
