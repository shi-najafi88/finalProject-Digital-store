import React from 'react';
import './header.scss';
import logo from '../../asets/images/logo.png';
import { Button, Input, Nav } from '../../components';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { IoLogoTwitter } from 'react-icons/io'

export const Header = () => {
  return (
    <div className='header_container'>

      <div className='wrapper_logo'>
        <Link className='link' to="/loginDashbord"><Button stateBtn={'loginBtn'} title={'ورود'}></Button></Link>
        <div className='wrapper_search'>
          <Input placeholder={"جستجو ..."} stateInput={'search'} type={'search'} />
          <div className='search_icon'><GoSearch style={{color:'white'}}/></div>
        </div>
        <img src= {logo} />
      </div>
    
      <div className='wrapper_nav'>
        <Nav/>
        <div className='sotial-icon'>
          <IoLogoTwitter style={{color:'#d95b44'}}/>
          <span>f</span>
          <span>in</span>
        </div>    
      </div>
      
    </div>
  )
}
