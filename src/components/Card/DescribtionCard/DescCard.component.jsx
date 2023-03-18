import React from 'react'
import { MdOutlinePhoneAndroid, MdOutlineLaptopMac } from 'react-icons/md'
import { FaTabletAlt } from 'react-icons/fa'
import { BsHeadset } from 'react-icons/bs'
import './DescCard.scss'


export const DescCard= ({title,desc}) => {
  return (
    <div className='container-descCard'>
        <div className='wrapper-icon'>
          {title === 'گوشی موبایل' ? <MdOutlinePhoneAndroid/>:
          title === 'لپتاپ' ? <MdOutlineLaptopMac/>:
          title === 'تبلت' ? <FaTabletAlt/>:
          title === 'هدفون' ? <BsHeadset/>:null}
            
        </div>
        <p className='title'>{title}</p>
        <p className='desc'>{desc}</p>
    </div>
  )
}
