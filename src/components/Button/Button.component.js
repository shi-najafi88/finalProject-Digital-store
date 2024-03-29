import React, { Children } from 'react'
import './Button.scss'

export const Button = ({title,stateBtn,clicked,type}) => {
  
  return (
    <>
   {stateBtn === 'loginBtn' ? <button className='loginBtn'>{title}</button>: 
   stateBtn === 'dashbord_formBtn' ? <button className='dashbord_formBtn' type={type}>{title}</button> :
   stateBtn === 'editPrice' ? <button onClick={clicked} type={type} className='editPrice'>{title}</button> :
   stateBtn === 'addProduct' ? <button onClick={clicked} className='addProduct'>{title}</button> :
   stateBtn === 'deletModal_yes' ? <button onClick={clicked} className='deletModal_yes'>{title}</button> :
   stateBtn === 'deletModal_no' ? <button onClick={clicked} className='deletModal_no'>{title}</button> :
   stateBtn === 'basket' ? <button onClick={clicked} className='cart-btn'>{title}</button> :
   stateBtn === 'paymentBtn' ? <button onClick={clicked} className='payment-btn'>{title}</button> :
   stateBtn === 'cancelPayment' ? <button onClick={clicked} className='cancelPayment'>{title}</button> :
   <button>{title}</button>}
    </>
  )
}
