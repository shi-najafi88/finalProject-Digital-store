import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { ALLPRODUCT, CLOSE_DELETBASKETMODAL, DATATABEL, NO_DELETmodal, REMOVEFROMCART, YES_DELETmodal } from '../../../redux/slices'
import { Button } from '../../Button/Button.component'
import './ModalBasket.scss'

export const ModalDeletBasket = () => {

    const state = useSelector(state => state.shopp)
    const dispatch = useDispatch()
   
   //when click yes btn delet product
    const yesDelet_handler = () => { 

        dispatch(REMOVEFROMCART(state.productId))
    }

    //when click no btn close delet modal
    const NoDelet_handler = () => {
        dispatch(CLOSE_DELETBASKETMODAL())
    }
    
  return (
    <div className='overlay'>
        <div className='wrapper_deletModal'>
            <p> آیا از حذف مطمئن هستید؟</p>
            <div className='btnContainer'>
                <Button clicked={yesDelet_handler} stateBtn={'deletModal_yes'} title={"Yes"}/>
                <Button clicked={NoDelet_handler} stateBtn={'deletModal_no'} title={"No"}/>
            </div>
        </div>
    </div>    
  )
}
