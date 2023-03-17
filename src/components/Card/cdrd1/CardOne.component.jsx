import React from 'react'
import './CardOne.scss'

export const CardOne = ({item}) => {
  return (
    
    <div className='container-cardOne'>
      <figure className='figure'> 

        <img src={`http://localhost:3002/files/${item.thumbnail}`}/>
       
        <div className='wrapper-info'>
            <p className='title'>{item.name}</p>
            <p>{item.description}</p>
            <div className='wrapper-price'>{(+item.price).toLocaleString("fa")} تومان</div>
        </div>

      </figure>      
    </div>
    
  )
}