import React from 'react'
import './ModalDashboard.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { Button, ModalDetail } from '../../index'
import { CkEditors } from '../../CkEditor/CkEditor'
import { useDispatch, useSelector } from 'react-redux'
import {  CLOSE_MODAL, DATATABEL } from '../../../redux/slices'
import { useAuthModalForm } from '../../../hook'
import { toast, ToastContainer} from 'react-toastify'
import axios from 'axios'


export const ModalDashboard = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.shopp)
    

    //custom hook for form validation
    const { reset , register , handleSubmit , errors} = useAuthModalForm()

    //upload image
    // const uploadHandler = async(data) => {
    //     let formData = new FormData();
    //     formData.append("image", img);
    //     await axios.post('http://localhost:3002/upload',getFormData) 
    //     .then(res => console.log(res.data.filename))
    // }
    
    //edit product
    const EditBtn_modal = async(data) => {  
        // uploadHandler()
         
        await axios.patch(`http://localhost:3002/products/${state.productId}`,data)  
        .then(()=>{toast.success('Edit is successfule')

        //for rerender page after edit
         axios.get(`http://localhost:3002/products?_page=${state.getPage}&_limit=${5}`)
        .then(res => dispatch(DATATABEL(res.data)))
    })   
    }
   
    
    //add product 
    const AddBtn_modal = async(data) => {
        
        try{
            await axios.post('http://localhost:3002/products',data)
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


    const submitForm = (data) => {

        if(state.modalEdit){
            EditBtn_modal(data)
            
        }else if(state.modalAdd){
            AddBtn_modal(data)
        }  
    }

    // useEffect(()=>{},[])

    //close modal
    const CloseModal_handler = ()=> {
        dispatch(CLOSE_MODAL())
    }


    return(
       
        <div className= "overlay">
        <ToastContainer/>
            <form className="modalWrapper" onSubmit={handleSubmit(submitForm)} >

                <div className='headerModal'>
                    <h3>افزودن / ویرایش کالا</h3>
                    <AiOutlineClose onClick={CloseModal_handler} style={{color:'red', fontSize:'1.2rem',cursor:'pointer'}}/>   
                </div>

                <div className='wrapper-modal-data'>
                    <ModalDetail type={'file'} title={'تصویر کالا:'} 
                    error={errors.thumbnail?.message} validation={{...register('thumbnail')}} />

                    <ModalDetail type={'file'} title={'تصاویر کالا:'} 
                    error={errors.image?.message} validation={{...register('image')}} />
                </div>

                <div className='wrapper-modal-data'>
                    <ModalDetail type={'text'} title={'نام کالا:'} 
                    error={errors.name?.message} validation={{...register('name')}} />

                    <ModalDetail type={'text'} title={'برند:'} 
                    error={errors.brand?.message} validation={{...register('brand')}} />
                </div>

                <div className='wrapper-modal-data'>
                    <div className='container_modalDetail'>
                        <labela>دسته بندی:</labela>
                        <select {...register("categoryname")}>
                            <option></option>
                            <option value={"لپتاپ"}>لپتاپ</option>
                            <option value={"گوشی موبایل"}>گوشی موبایل</option>
                            <option value={"تبلت"}>تبلت</option>
                            <option value={"هدفون"}>هدفون</option>
                        </select>
                        <p className="error">{errors.categoryname?.message}</p>
                    </div>

                    <ModalDetail type={'text'} title={'قیمت:'} 
                    error={errors.price?.message} validation={{...register('price')}} />

                </div>

                <div className='wrapper-quantity'>
                    <ModalDetail type={'number'} title={'تعداد :'} 
                    error={errors.quantity?.message} validation={{...register('quantity')}} />
                </div>

                <div className='wrapper_textarea'>
                    <labela>توضیحات:</labela> 
                    <CkEditors />      
                </div>

                <Button type={'submit'} stateBtn={'editPrice'} title={'ویرایش'}/>
                
                

            </form>
        </div>  
    )
}
