import React from 'react'
import "./Input.scss"

export const Input = ({placeholder,type,stateInput,name,cheked,val,validation}) => {
  return (
    <>
    {

    stateInput === 'dashboard_search' ?
    <input className='dashboard_search' placeholder={placeholder} type={type} />:

    <input className='' type={type}  />
  }
    </>
  )
}
