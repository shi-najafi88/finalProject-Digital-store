import React from 'react'
import "./Input.scss"

export const Input = ({placeholder,type,pad,raduce,w,color,font}) => {
  return (
    <input 
    className='input'
    placeholder={placeholder} 
    type={type} 
    style={{padding:pad, borderRadius:raduce, width:w, color:color, fontSize:font}}
    />
  )
}
