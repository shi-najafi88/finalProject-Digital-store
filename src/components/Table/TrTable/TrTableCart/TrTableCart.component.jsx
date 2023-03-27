import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import './TrTableCart.scss'

export const TrTableCart = ({item}) => {
   
  return (
    
    <tr >
      <td><img src={`http://localhost:3002/files/${item.thumbnail}`} style={{width:'50px',height:'50px'}}/></td>
      <td>{item.name}</td>
      <td>{(+item.price).toLocaleString("fa")}</td>
      <td><input className='count-product-cart' type={'number'} defaultValue={item.count} min={1} max={item.quantity}/></td>       
      <td><RiDeleteBinLine style={{fontSize:'1.2rem',color:'red'}}/></td>       
    </tr>   
  )
}
