import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { ALLPRODUCT, DATATABEL, NO_DELETmodal, YES_DELETmodal } from '../../../redux/slices'
import { Button } from '../../Button/Button.component'
import './ModalDelet.scss'

export const ModalDelet = () => {

    const state = useSelector(state => state.shopp)
    const dispatch = useDispatch()
    

    const getAllProduct = () => {
        axios.get('http://localhost:3002/products')
        .then(res=> dispatch(ALLPRODUCT(res.data)))
    }

    useEffect(()=>{
        getAllProduct()
    },[dispatch])
   
   //when click yes btn delet product
    const yesDelet_handler = () => { 

        dispatch(YES_DELETmodal(state.allProduct))

        axios.delete(`http://localhost:3002/products/${state.productId}`)
        .then(()=>{toast.success('Delet is successfule')
        
        //get products for rerender
        axios.get(`http://localhost:3002/products?_page=${state.getPage}&_limit=${5}`)
        .then(res => dispatch(DATATABEL(res.data)))
       
        })
    }

    //when click no btn close delet modal
    const NoDelet_handler = () => {
        dispatch(NO_DELETmodal())
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
