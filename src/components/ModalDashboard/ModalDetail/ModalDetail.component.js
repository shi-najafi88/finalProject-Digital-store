import React from 'react'
import './ModalDetail.scss'

export const ModalDetail = ({title,type,name,validation,error}) => {
  return (
    <div className='container_modalDetail'>
        <label>{title}</label>
        <input type={type} name={name} {...validation}/>
        <p className="error">{error}</p>
    </div>
  )
}
