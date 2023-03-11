import React from 'react'
import './ModalDetail.scss'

export const ModalDetail = ({title,type,chengeVal}) => {
  return (
    <div className='container_modalDetail'>
        <label>{title}</label>
        <input onChange={chengeVal} type={type}/>
    </div>
  )
}
