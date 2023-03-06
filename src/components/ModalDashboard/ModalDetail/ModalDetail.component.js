import React from 'react'
import './ModalDetail.scss'

export const ModalDetail = ({title,type}) => {
  return (
    <div className='container_modalDetail'>
        <label>{title}</label>
        <input type={type}/>
    </div>
  )
}
