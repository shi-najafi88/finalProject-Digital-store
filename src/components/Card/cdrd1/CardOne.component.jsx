import React from 'react'
import './CardOne.scss'
import img12 from '../../../asets/images/12.jpg'

export const CardOne = () => {
  return (
    
    <div className='wrapper-container'>
      <figure className='figure'> 

        <img src={img12}/>
       
        <div className='wrapper-info'>
            <p>sgdftry</p>
            <p>sgdftryjhyyyyyyyytttttttttttttttttgg</p>
            <div className='wrapper-price'>1250000 تومان</div>
        </div>

      </figure>      
    </div>
    
  )
}
