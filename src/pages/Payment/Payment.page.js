import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components'

export const Payment = () => {
  return (
    <div>
      <Link className='link' to="/basket/register/payment/success"><Button title={'پرداخت'}></Button></Link>
      <Link className='link' to="/basket/register/payment/faild"><Button title={'انصراف'}></Button></Link>
      <h1>this is a payment page</h1>
    </div>
  )
}
