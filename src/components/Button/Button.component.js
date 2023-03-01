import React, { Children } from 'react'
import './Button.scss'

export const Button = ({title,stateBtn}) => {
  
  return (
    <>
   {stateBtn === 'loginBtn' ? <button className='loginBtn'>{title}</button>: 
   stateBtn === 'dashbord_formBtn' ? <button className='dashbord_formBtn'>{title}</button> :
   <button>{title}</button> }
    </>
  )
}
