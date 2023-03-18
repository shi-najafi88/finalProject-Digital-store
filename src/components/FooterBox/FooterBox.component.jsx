import React from 'react'
import './FooterBox.scss'

export const FooterBox = ({img,title}) => {
  return (
    <div className='wrapper-svg-footer'>
        <img src={img}/>
        <span>{title}</span>
    </div>
  )
}
