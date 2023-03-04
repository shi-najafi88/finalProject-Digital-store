import React from 'react'
import { Link } from 'react-router-dom'
import './TrTable.scss'

export const TrTableOrder = () => {
  return (
   
    <tr >
      <td>yyyy</td>
      <td>rrrrr</td>
      <td>1399/10/10</td>
      <td><Link className='link' to="/">بررسی سفارشات</Link></td>       
    </tr>
   
  )
}
