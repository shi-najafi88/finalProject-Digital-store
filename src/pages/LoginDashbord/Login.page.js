import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, IconPass } from '../../components'
import './Login.scss'
import login_img from '../../asets/images/admin.jpg'
import { useAuthLoginForm } from '../../hook'
import Cookies from "js-cookie";
import axios from 'axios'


export const Login = () => {
  //hook for validation
  const { register , handleSubmit , errors} = useAuthLoginForm()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleLoginUser = async(data) =>{
    
    try {
          await axios.post('http://localhost:3002/auth/login',data)
          .then(res => {
          localStorage.setItem('token', res.data.accessToken)
          localStorage.setItem('refresh_token', res.data.refreshToken)
          navigate('/loginDashbord/dashbordOrders');
          })
        } catch (err) {
            console.log(err)
          }
  }

  useEffect(() => {
    handleLoginUser()
    if (pathname === '/loginDashbord' && localStorage.getItem('token')) {
        navigate('/loginDashbord/dashbordOrders')
    }
  }, [pathname]);


  return (
    <div className='container-login'>
      <div className='wrapper_formLogin_image'>
       
        <div className='wrapper_form'>
        <h2>خوش آمدید</h2>

          <form onSubmit={handleSubmit(handleLoginUser)}>
            <input className='inputLogin' {...register("username")} 
            placeholder={'نام کاربری'} type={'text'}/>
            <p className="error">{errors.username?.message}</p>

            <IconPass type={"password"} placeholder={"کلمه عبور"} 
             validation={{...register('password')}} />
            <p className="error">{errors.password?.message}</p>
            
            <Button title={'ورود'} stateBtn={'dashbord_formBtn'} type={"submit"} />
            <Link className='back' to="/">بازگشت به سایت</Link>
          </form>
        </div>
        <img src={login_img}/>
        
      </div>     
    </div>
  )
}





 