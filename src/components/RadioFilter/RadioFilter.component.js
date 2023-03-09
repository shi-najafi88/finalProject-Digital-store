import React from 'react'
import { Input } from '../Input/Input.component'
import './RadioFilter.scss'

export const RadioFilter = ({title,cheked,changed}) => {

  return (
    <div className='wrapper_filter'>
        <input className='filter' onChange={changed} name='radio' type={'radio'} checked={cheked} />
        <label>{title}</label>    
    </div>
  )
}
