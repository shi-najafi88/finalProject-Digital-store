import React, { Children } from 'react'
import './Button.scss'

export const Button = ({title,stateBtn}) => {
  
  return (
    <>
   {stateBtn === 'loginBtn' ? <button className='loginBtn'>{title}</button>:
   <button>{title}</button> }
    </>
  )
}
