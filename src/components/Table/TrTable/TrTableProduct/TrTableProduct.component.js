import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {OPEN_EDITMODAL, OPEN_DeletMODAL } from '../../../../redux/slices'
import './TrTableProduct.scss'

export const TrTableProduct = ({item}) => {

  const dispatch = useDispatch()

  // open modal when click on edit icon
  const OpenEditModal_handler = (id)=> {
    dispatch(OPEN_EDITMODAL(id))
  }

  // open modal when click on delet icon
  const OpenDeletModal_handler = (id)=> {
    dispatch(OPEN_DeletMODAL(id))
  }

  return (
    <tr >
       <td className="tdOne_product"><img src={`http://localhost:3002/files/${item.thumbnail}`} style={{width:'50px',height:'50px'}}/></td>
       <td className="thTwo_product">{item.name}</td>
       <td className="thTwo_product">{item.categoryname}</td>
       <td className="thThree_product">
       
          <div className='wrapper_iconProduct'>
          <Link to="">
          <FaRegEdit onClick={()=>OpenEditModal_handler(item.id)} style={{fontSize:'1.2rem',color:'blue'}}/>
          </Link>

          <Link to="">
          <RiDeleteBinLine onClick={()=>OpenDeletModal_handler(item.id)} style={{fontSize:'1.2rem',color:'red'}}/>
          </Link>
          </div>
        </td>     
    </tr>
  )
}
