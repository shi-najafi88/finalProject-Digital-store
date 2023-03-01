import React from 'react'
import "./Input.scss"

export const Input = ({placeholder,type,pad,raduce,w,color,font,stateInput}) => {
  return (
    <>
    {stateInput === 'login'? 
    <input className='inputLogin'placeholder={placeholder} type={type} />:

    stateInput === 'search' ?
    <input className='search'placeholder={placeholder} type={type} /> :
    
    <input className=''placeholder={placeholder} type={type} />
  }
    </>
  )
}
