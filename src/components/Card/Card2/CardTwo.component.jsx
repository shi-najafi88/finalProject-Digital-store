import React from 'react'
import {TiStarHalfOutline , TiStarFullOutline ,TiStarOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import './CardTwo.scss'



export const CardTwo = ({item}) => {
  return (
    <div className='container-cardTwo'>
        <figure className='figure'>

        <Link className='detail' to={`/products/productDetail/${item.id}`}>مشاهده جزئیات</Link>
        <div className='wrapper-img-cardTwo'>
            <img src={`http://localhost:3002/files/${item.thumbnail}`}/>
        </div>
        
        <div className='wraper-info-cardTwo' >
            <p className='title'>{item.name}</p>
            <p>{item.description}</p>
            <p className='price'>{(+item.price).toLocaleString("fa")} تومان</p>
            <div className='wrapper-star'>
                <TiStarOutline style={{color:'orange'}}/>
                <TiStarHalfOutline style={{color:'orange'}}/>
                <TiStarFullOutline style={{color:'orange'}}/>
                <TiStarFullOutline style={{color:'orange'}}/>
                <TiStarFullOutline style={{color:'orange'}}/>
            </div>
        </div>
        </figure>
    </div>
  )
}
