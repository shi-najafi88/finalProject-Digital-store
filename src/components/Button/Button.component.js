import React, { Children } from 'react'
import './Button.scss'

export const Button = ({title}) => {
  return (
    <div>
      <button>{title}</button>
    </div>
  )
}
