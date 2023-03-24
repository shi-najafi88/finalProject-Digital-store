import React from 'react'
import './ModalDetail.scss'

export const ModalDetail = ({title,type,name,validation,error,multiple,min}) => {
  return (
    <div className='container_modalDetail'>
        <label>{title}</label>
        <input type={type} name={name} min={min} {...validation} multiple={multiple} />
        <p className="error">{error}</p>
    </div>
  )
}
