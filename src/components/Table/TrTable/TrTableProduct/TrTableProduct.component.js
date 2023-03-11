import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { OPEN_MODAL, OPEN_DeletMODAL } from '../../../../redux/slices'
import './TrTableProduct.scss'

export const TrTableProduct = ({item}) => {

  const dispatch = useDispatch()

  // open modal when click on edit icon
  const OpenEditModal_handler = ()=> {
    dispatch(OPEN_MODAL())
  }

  // open modal when click on delet icon
  const OpenDeletModal_handler = ()=> {
    dispatch(OPEN_DeletMODAL())
  }

  return (
    <tr >
       <td className="tdOne_product"><img src={`http://localhost:3002/files/${item.thumbnail}`} style={{width:'50px',height:'50px'}}/></td>
       <td className="thTwo_product">{item.name}</td>
       <td className="thTwo_product">{item.categoryname}</td>
       <td className="thThree_product">
        <Link to="">
          <div className='wrapper_iconProduct'>
          <FaRegEdit onClick={OpenEditModal_handler} style={{fontSize:'1.2rem',color:'blue'}}/>
          <RiDeleteBinLine onClick={OpenDeletModal_handler} style={{fontSize:'1.2rem',color:'red'}}/>
          </div>
        </Link></td>     
    </tr>
  )
}
