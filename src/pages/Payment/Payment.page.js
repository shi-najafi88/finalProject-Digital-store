import React from 'react'
import { Button } from '../../components'
import './Payment.scss'
import axios from 'axios'

export const Payment = () => {

  const success_handler = async() => {
    const order = JSON.parse(localStorage.getItem('order'))
    await axios.post('http://localhost:3002/orders',order)

    localStorage.removeItem('order')
    window.location.href = "/basket/register/payment/success"
  }
  
  const faild_handler = () => {
    window.location.href = "/basket/register/payment/faild"
  }
  return (
    <div className='container-payment'>

      <div className='wraper-paymentBtn'>
        <Button clicked={success_handler} title={'پرداخت'} stateBtn={'paymentBtn'}></Button>
        <Button clicked={faild_handler} title={'انصراف'} stateBtn={'cancelPayment'}></Button>
      </div>
        
    </div>
  )
}
