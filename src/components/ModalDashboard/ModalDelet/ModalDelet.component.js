import React from 'react'
import { useDispatch } from 'react-redux'
import { NO_DELETmodal } from '../../../redux/slices'
import { Button } from '../../Button/Button.component'
import './ModalDelet.scss'

export const ModalDelet = () => {
    const dispatch = useDispatch()

    //when click no btn close delet modal
    const NoDelet_handler = () => {
        dispatch(NO_DELETmodal())
    }
    
  return (
    <div className='overlay'>
        <div className='wrapper_deletModal'>
            <p> آیا از حذف مطمئن هستید؟</p>
            <div className='btnContainer'>
                <Button  stateBtn={'deletModal_yes'} title={"Yes"}/>
                <Button clicked={NoDelet_handler} stateBtn={'deletModal_no'} title={"No"}/>
            </div>
        </div>
    </div>
    
  )
}
