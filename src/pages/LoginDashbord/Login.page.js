import React from 'react'
import { Link } from 'react-router-dom'
import { Button, IconPass, Input } from '../../components'
import './Login.scss'
import login_img from '../../asets/images/admin.jpg'

export const Login = () => {
  return (
    <div className='container-login'>
      <div className='wrapper_formLogin_image'>
       
        <div className='wrapper_form'>
        <h2>خوش آمدید</h2>
          <form>
            <Input placeholder={'نام کاربری'} type={'text'} stateInput={'login'} />
            <IconPass type={"password"}placeholder={" کلمه عبور"} />
            <Link className='link' to="/loginDashbord/dashbord"><Button title={'ورود'} stateBtn={'dashbord_formBtn'} ></Button></Link>
            <Link className='back' to="/">بازگشت به سایت</Link>
          </form>
        </div>
        <img src={login_img}/>
        
      </div>     
    </div>
  )
}
