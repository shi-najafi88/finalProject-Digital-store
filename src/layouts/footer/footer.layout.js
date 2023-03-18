import React from 'react'
import logo from '../../asets/images/logo.png';
import { SiOpenstreetmap } from 'react-icons/si';
import { BsGithub, BsHeadset } from 'react-icons/bs';
import {MdOutlineEmail } from 'react-icons/md';
import { FooterBox } from '../../components';
import { AiFillFacebook, AiFillGooglePlusSquare, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import './footer.scss'
import cash from '../../asets/images/icons/cash.png'
import express from '../../asets/images/icons/express.png'
import call from '../../asets/images/icons/call.png'
import returnBox from '../../asets/images/icons/returnBox.png'
import authenticity from '../../asets/images/icons/authenticity.png'
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='container-footer-contact'>
        <img src= {logo} />

        <section className='section-contact'>
          <div className='info'><SiOpenstreetmap style={{color:'white'}} />تهران- خیابان پیامبر غربی کوچه لاله ساختمان سهیل</div>
          <div className='info'><MdOutlineEmail style={{color:'white'}}/>shinajafi401@gmail.com</div>
          <div className='info'><BsHeadset style={{color:'white'}}/> 021-44363548</div> 
          <div className='wrapper-social'>
            <AiFillFacebook style={{color:'white',fontSize:'1.4rem'}}/>
            <AiFillTwitterSquare style={{color:'white',fontSize:'1.4rem'}}/>
            <AiFillLinkedin style={{color:'white',fontSize:'1.4rem'}}/>
            <AiFillGooglePlusSquare style={{color:'white',fontSize:'1.4rem'}}/>
          </div>
        </section>
        
      </div>

      <section className='section-icon'>
        <div className='container-svg-footer'>
          <FooterBox img={express} title={'تحویل اکسپرس'}/>
          <FooterBox img={cash} title={'پرداخت در محل'}/>  
          <FooterBox img={call} title={'پاسخگویی 24 ساعته'}/>  
          <FooterBox img={returnBox} title={'ضمانت بازگشت کالا'}/>  
          <FooterBox img={authenticity} title={'ضمانت اصل بودن کالا'}/>      
        </div>

        <div className='wrapper-link'>
          <Link className='link-git' to='https://github.com/shi-najafi88'>github.com/shi-najafi88</Link>
          <BsGithub style={{fontSize:'1.3rem'}}/>
        </div>
      </section>

      

    </div>
  )
}
