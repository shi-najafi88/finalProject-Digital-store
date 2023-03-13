import React, { useEffect } from 'react'
import './ModalDashboard.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { Button, ModalDetail } from '../../index'
import { CkEditors } from '../../CkEditor/CkEditor'
import { useDispatch, useSelector } from 'react-redux'
import { ADDPRODUCT, ALLPRODUCT, CLOSE_MODAL, DATATABEL, EDITBTNMODAL } from '../../../redux/slices'
import { useInputModal } from '../../../hook'
import { toast, ToastContainer} from 'react-toastify'
import axios from 'axios'


export const ModalDashboard = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.shopp)
    

    // custom hook
    const {inputValue:image, ValueChangeHandler:ChangeInputFile_handler} = useInputModal()
    const {inputValue:productName, ValueChangeHandler:ChangeInputName_handler} = useInputModal()
    const {inputValue:category, ValueChangeHandler:ChangeCategory_handler} = useInputModal()
    
   
    const getAllProducts = () => {
        axios.get('http://localhost:3002/products')
        .then(res=> dispatch(ALLPRODUCT(res.data)))
    }

    //edit product
    const EditBtn_modal = () => {  
         
        dispatch(EDITBTNMODAL(
            {thumbnail:image,
            name:productName,
            categoryname:category}
        ))
        
        axios.patch(`http://localhost:3002/products/${state.productId}`,{
            thumbnail:image,
            name:productName,
            categoryname:category
        })  
        .then(()=>{toast.success('Edit is successfule')

        //for rerender page after edit
        axios.get(`http://localhost:3002/products?_page=${state.getPage}&_limit=${5}`)
        .then(res => dispatch(DATATABEL(res.data)))
    })   
    }
    
 
    //add product 
    const AddBtn_modal = () => {

        dispatch(ADDPRODUCT(
            {thumbnail:image,
            name:productName,
            categoryname:category}
        ))
        
        try{
            axios.post('http://localhost:3002/products',{
                thumbnail:state.saveProductInfo.image,
                name: state.saveProductInfo.name,
                categoryname:state.saveProductInfo.categoryname
            })
            .then(()=>{toast.success('Add is successfule')

            //for rerender page after add
            axios.get(`http://localhost:3002/products?_sort=createdAt&_order=desc&&_page=${1}&_limit=${5}`)
            .then(res => dispatch(DATATABEL(res.data)))
            })    
        }
        catch(err){
            toast.error('Dont add product')
        }          
    }

    useEffect(()=>{
        getAllProducts()
    },[EditBtn_modal,AddBtn_modal,dispatch])


    //close modal
    const CloseModal_handler = ()=> {
        dispatch(CLOSE_MODAL())
    }

    return(
       
        <div className= "overlay">
        <ToastContainer/>
            <div className= "modalWrapper">

                <div className='headerModal'>
                    <h3>افزودن / ویرایش کالا</h3>
                    <AiOutlineClose onClick={CloseModal_handler} style={{color:'red', fontSize:'1.2rem',cursor:'pointer'}}/>   
                </div>
              
                <ModalDetail type={'file'} title={'تصویر کالا:'} chengeVal={ChangeInputFile_handler} name={image} />
                <ModalDetail type={'text'} title={'نام کالا:'} chengeVal={ChangeInputName_handler} name={productName} />

                <div className='container_modalDetail'>
                    <labela>دسته بندی:</labela>
                    <select onChange={ChangeCategory_handler} name={category}>
                        <option></option>
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

                {state.modalEdit ? <Button clicked={EditBtn_modal} stateBtn={'editPrice'} title={'ویرایش'}/>:
                <Button clicked={AddBtn_modal} stateBtn={'editPrice'} title={'ذخیره'}/>
                }      
    
            </div>
        </div>  
    )
}
