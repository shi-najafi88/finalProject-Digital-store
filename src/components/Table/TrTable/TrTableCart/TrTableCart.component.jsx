import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { CARTPRODUCT, OPEN_DELETBASKETMODAL, OPEN_DeletMODAL, REMOVEFROMCART } from '../../../../redux/slices'
import './TrTableCart.scss'

export const TrTableCart = ({item}) => {

  const dispatch = useDispatch()

  //open delet modal
  const openDeleteModalCart_handler = (id)=> {
    dispatch(OPEN_DELETBASKETMODAL(id))
  }

  // change product count
  const changeCount_handler = (item,e)=> {
    dispatch(CARTPRODUCT({...item,count:e.target.value}))
  }
   
  return ( 
    <tr >
      <td><img src={`http://localhost:3002/files/${item.thumbnail}`} style={{width:'50px',height:'50px'}}/></td>
      <td>{item.name}</td>
      <td>{(+item.price).toLocaleString("fa")}</td>
      <td><input onChange={(e)=> changeCount_handler(item,e)} className='count-product-cart' type={'number'} defaultValue={item.count} min={1} max={item.quantity}/></td>       
      <td><RiDeleteBinLine onClick={()=>openDeleteModalCart_handler(item.id)} style={{fontSize:'1.2rem',color:'red',cursor:'pointer'}}/></td>       
    </tr>   
  )
}
