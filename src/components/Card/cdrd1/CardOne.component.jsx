import React from 'react'
import { Link } from 'react-router-dom'
import './CardOne.scss'

export const CardOne = ({item}) => {

  const showDetail_handler = () => {
    
  }
  return (
    
    <div className='container-cardOne'>
 
      <figure className='figure' onClick={showDetail_handler}>

      <Link className='detail' to="/products/productDetail">مشاهده جزئیات</Link>

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
