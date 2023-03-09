import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { CLOSE_MODAL_CHECKORDER } from '../../../redux/slices/index'
import { Button } from '../../Button/Button.component'
import { Table } from '../../Table/Table/Table.component'

import './ModalCheckOrder.scss'

export const ModalCheckOrder = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.shopp)

    const CloseModalCheckPrder_handler = ()=> {
        dispatch(CLOSE_MODAL_CHECKORDER())
    }
    
  return (
    <div className='overlay'>
        <div className='wrapper-modal-checkOrder'>

            <div className='headerModal'>
                <h3>نمایش سفارش</h3>
                <AiOutlineClose onClick={CloseModalCheckPrder_handler} style={{color:'red', fontSize:'1.2rem',cursor:'pointer'}}/>   
            </div>

            <section className='container-customerInfo'>

                {/* map for show costomer data in modal check order */}
                {state.costomerData.map(item => (
                <>

                <div className='wrapper-customerInfo'>
                    <span>نام مشتری :</span>
                    <p>{item.username +' '+ item.lastname}</p>
                </div>

                <div className='wrapper-customerInfo'>
                    <span> آدرس:</span>
                    <p>{item.address}</p>
                </div>

                <div className='wrapper-customerInfo'>
                    <span>تلفن :</span>
                    <p>{item.phonenumber}</p>
                </div>

                <div className='wrapper-customerInfo'>
                    <span>زمان تحویل :</span>
                    <p>{item.expectAt}</p>
                </div>

                <div className='wrapper-customerInfo'>
                    <span>زمان سفارش :</span>
                    <p>{item.createdAt}</p>
                </div>
                </>
                ))}

            </section>

            <section className='wrapper-table-modalCheckOrder'>
            <Table tableStatus={'tableCheckOrder'} titleOne={'کالا'} titleTwo={'قیمت'} titleThree={'تعداد'} />
            </section>

            <Button stateBtn={'addProduct'} title={'تحویل شد'}/>
        </div>
    </div>
  )
}
