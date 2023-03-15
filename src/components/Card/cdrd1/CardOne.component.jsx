import React from 'react'
import './CardOne.scss'

export const CardOne = ({item}) => {
  return (
    
    <div className='wrapper-container'>
      <figure className='figure'> 

        <img src={item.thumbnail}/>
       
        <div className='wrapper-info'>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <div className='wrapper-price'>{(+item.price).toLocaleString("fa")} تومان</div>
        </div>

      </figure>      
    </div>
    
  )
}
