import React from 'react'
import {TiStarHalfOutline , TiStarFullOutline ,TiStarOutline } from 'react-icons/ti'
import './CardTwo.scss'
import img50 from'../../../asets/images/50.jpg'


export const CardTwo = () => {
  return (
    <div className='container-cardTwo'>
        <figure className='figure'>
        <div className='wrapper-img-cardTwo'>
            <img src={img50}/>
        </div>
        
        <div className='wraper-info-cardTwo' >
            <p>hhhhhhhhh</p>
            <p>fffffffffffffffffffffffffffffffffffffffff</p>
            <p>2500 تومان</p>
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
