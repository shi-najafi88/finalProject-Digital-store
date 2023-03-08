import React from 'react'
import './ModalDashboard.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { Button, ModalDetail } from '../../index'
import { CkEditors } from '../../CkEditor/CkEditor'
import { useDispatch } from 'react-redux'
import { CLOSE_MODAL } from '../../../redux/slices'


export const ModalDashboard = () => {
    const dispatch = useDispatch()

    const CloseModal_handler = ()=> {
        dispatch(CLOSE_MODAL())
    }
  
    return(
        <div className= "overlay">
            <div className= "modalWrapper">
                <div className='headerModal'>
                    <h3>افزودن / ویرایش کالا</h3>
                    <AiOutlineClose onClick={CloseModal_handler} style={{color:'red', fontSize:'1.2rem',cursor:'pointer'}}/>   
                </div>
                
                <ModalDetail type={'file'} title={'تصویر کالا:'}/>
                <ModalDetail type={'text'} title={'نام کالا:'}/>

                <div className='container_modalDetail'>
                    <labela>دسته بندی:</labela>
                    <select>
                        <option ></option>
                        <option value={"لپتاپ"}>لپتاپ</option>
                        <option value={"موبایل"}>موبایل</option>
                        <option value={"تبلت"}>تبلت</option>
                        <option value={"هدفون"}>هدفون</option>
                    </select>
                </div>

                <div className='wrapper_textarea'>
                    <labela>توضیحات:</labela> 
                    <CkEditors/>      
                </div>

                <Button stateBtn={'editPrice'} title={'ذخیره'}/>
    
            </div>
        </div>    
    )
}
