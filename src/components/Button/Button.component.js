import React, { Children } from 'react'
import './Button.scss'

export const Button = ({title,stateBtn,clicked,type}) => {
  
  return (
    <>
   {stateBtn === 'loginBtn' ? <button className='loginBtn'>{title}</button>: 
   stateBtn === 'dashbord_formBtn' ? <button className='dashbord_formBtn' type={type}>{title}</button> :
   stateBtn === 'editPrice' ? <button className='editPrice'>{title}</button> :
   stateBtn === 'addProduct' ? <button onClick={clicked} className='addProduct'>{title}</button> :
   stateBtn === 'deletModal_yes' ? <button onClick={clicked} className='deletModal_yes'>{title}</button> :
   stateBtn === 'deletModal_no' ? <button onClick={clicked} className='deletModal_no'>{title}</button> :
   <button>{title}</button>}
    </>
  )
}
