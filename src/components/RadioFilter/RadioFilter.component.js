import React from 'react'
import { Input } from '../Input/Input.component'
import './RadioFilter.scss'

export const RadioFilter = ({title,cheked}) => {
  return (
    <div className='wrapper_filter'>
        <Input name='radio' type={'radio'} cheked={cheked} stateInput={'filter'}/>
        <label>{title}</label>    
    </div>
  )
}
