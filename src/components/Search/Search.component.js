import React from 'react'
import { GoSearch } from 'react-icons/go';
import { Input } from '../Input/Input.component';
import './Search.scss'

export const Search = ({dashboardSearch}) => {
  return (
    <div className='wrapper_search'>
        <input className='search' placeholder={"جستجو ..."} type={'search'} />
        <div className='search_icon'><GoSearch style={{color:'white'}}/></div>
    </div>
  )
}
