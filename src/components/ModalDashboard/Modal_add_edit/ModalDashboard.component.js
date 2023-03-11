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

    const ChangeInputFile_handler = () => {
        console.log('okk');
    }

    const ChangeInputName_handler = () => {
        console.log('okklll');
    }
  
    const ChangeCategory_handler = (e) => {
        console.log(e.target.value);
    }

   
    return(
        <div className= "overlay">
            <div className= "modalWrapper">
                <div className='headerModal'>
                    <h3>افزودن / ویرایش کالا</h3>
                    <AiOutlineClose onClick={CloseModal_handler} style={{color:'red', fontSize:'1.2rem',cursor:'pointer'}}/>   
                </div>
                
                <ModalDetail type={'file'} title={'تصویر کالا:'} chengeVal={ChangeInputFile_handler} />
                <ModalDetail type={'text'} title={'نام کالا:'} chengeVal={ChangeInputName_handler}/>

                <div className='container_modalDetail'>
                    <labela>دسته بندی:</labela>
                    <select onChange={ChangeCategory_handler}>
                        <option ></option>
                        <option value={"لپتاپ"}>لپتاپ</option>
                        <option value={"گوشی موبایل"}>گوشی موبایل</option>
                        <option value={"تبلت"}>تبلت</option>
                        <option value={"هدفون"}>هدفون</option>
                    </select>
                </div>

                <div className='wrapper_textarea'>
                    <labela>توضیحات:</labela> 
                    <CkEditors />      
                </div>

                <Button stateBtn={'editPrice'} title={'ذخیره'}/>
    
            </div>
        </div>    
    )
}
