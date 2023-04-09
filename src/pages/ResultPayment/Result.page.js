import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../layouts';
import './Result.scss'
import logoSuccess from '../../asets/images/checked.png';
import logoFail from '../../asets/images/cancel.png';

export const ResultPayment = () => {

  const params = useParams()
  const result = params.result

  return (
    <div className='container-result'>
      <Header />
      <h2>نتیجه پرداخت</h2>

      {result === 'success' ?
      <div className='wrapper-result'>
        <img src={logoSuccess}/>
        <p>با تشکر از پرداخت شما. سفارش شما ثبت شد و جهت هماهنگی های لازم با شما تماس گرفته خواهد شد.</p>
      </div>:
      <div className='wrapper-result'>
       <img src={logoFail}/>
       <p>پرداخت موفقیت آمیز نبود. سفارش شما در انتظار پرداخت است</p>
     </div>
      }
      
    </div>
  )
}
