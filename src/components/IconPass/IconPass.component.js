import { useState } from 'react';
import { BsEyeSlash , BsEye} from 'react-icons/bs';
import './IconPass.scss'


export const IconPass = ({validation,error}) => {

    const [icon_status , setIcon_status] = useState()
  
      function chengeIcon_true() {
          setIcon_status(true)    
      }
      
      function chengeIcon_false() {
          setIcon_status(false)    
      }
      
    return (
      <div className='container_inputIcon'>
      {icon_status? 
      <>
      <input className='inputLogin' type={"text"} placeholder={" کلمه عبور"} {...validation}/>
      <BsEye style={{color:'gray',position:'absolute',left:'4rem',top:'.4rem',cursor:'pointer'}} onClick={chengeIcon_false}/>
      </> 
      :
      <>
      <input className='inputLogin' type={"password"} placeholder={" کلمه عبور"} {...validation} />
      <BsEyeSlash style={{color:'gray',position:'absolute',left:'4rem',top:'.4rem',cursor:'pointer'}} onClick={chengeIcon_true}/>
      </>
      }
    </div>  
    )
  }
  