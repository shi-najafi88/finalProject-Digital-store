import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import './Payment.scss'

export const Payment = () => {
  return (
    <div className='container-payment'>

      <div className='wraper-paymentBtn'>
        <Link className='link' to="/basket/register/payment/success"><Button title={'پرداخت'} stateBtn={'paymentBtn'}></Button></Link>
        <Link className='link' to="/basket/register/payment/faild"><Button title={'انصراف'} stateBtn={'cancelPayment'}></Button></Link>
      </div>
        
    </div>
  )
}
