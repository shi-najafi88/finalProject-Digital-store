import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ModalDetail } from '../../components'
import { useAuthRegister } from '../../hook/useAuthRegister/useAuthRegister'
import { Footer, Header } from '../../layouts'
import './Register.scss'

export const Register = () => {

  //custom hook for form validation
  const { register , handleSubmit , errors} =  useAuthRegister()

  const submitForm = () => {
    
  }

  return (
    <div className='container_finalCart'>
        <Header/>
        <main>
          <div className='wrapper-title'>
            <h2>نهایی کردن خرید</h2>
          </div>
          
          <form onSubmit={handleSubmit(submitForm)}>
            <div>
              <ModalDetail type={'text'} title={'نام :'}
               error={errors.name?.message} validation={{...register('name')}} />
              <ModalDetail type={'text'} title={' نام خانوادگی :'}
               error={errors.lastName?.message} validation={{...register('lastName')}} />
            </div>

            <div>
              <ModalDetail type={'text'} title={'آدرس :'}
               error={errors.address?.message} validation={{...register('address')}} />
              <ModalDetail type={'text'} title={' تلفن همراه :'}
               error={errors.mobile?.message} validation={{...register('mobile')}}/>
            </div>

            <div className='wraper-date'>
              <ModalDetail type={'text'} title={'تاریخ تحویل :'}
              error={errors.date?.message} validation={{...register('date')}} />
            </div>
          
          </form>
        <Link className='link' to="/basket/register/payment"><Button type={'submit'} title={'پرداخت'} stateBtn={"basket"} /></Link>
        </main>
        <Footer/>
    </div>
  )
}
