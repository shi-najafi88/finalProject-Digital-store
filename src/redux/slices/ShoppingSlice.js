import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    modalEdit: false,
    modalDelet: false,
    modalCheckOrder: false,
    listData:[],
    orderData:[],
    costomerData:[],
    ordersData:[],
    dataCtegory:[]
}
const ShoppingSlice = createSlice({
    name:'shopping/redux',
    initialState,
    reducers:{
        OPEN_MODAL:(state) => {
            state.modalEdit = true
        },

        OPEN_DeletMODAL:(state) => {
            state.modalDelet = true
        },

        OPEN_CheckOrderModal:(state) => {
            state.modalCheckOrder = true
        },

        NO_DELETmodal:(state) => {
            state.modalDelet = false
        },

        CLOSE_MODAL:(state) => {
            state.modalEdit = false
        },

        CLOSE_MODAL_CHECKORDER:(state) => {
            state.modalCheckOrder = false
        },

        DATATABEL:(state,action)=> {
            state.listData = action.payload
        },

        DATAORDER:(state,action)=> {
            state.orderData = action.payload
        }, 
        
        COSTOMERDATA:(state,action)=> {
            state.costomerData = action.payload
        },
        
        DATAORDERS:(state,action)=> {
            state.ordersData = action.payload
        },

        FILTERDATACATEGORY:(state,action)=> {
            state.dataCtegory = action.payload
        }
    }
})
export const { OPEN_MODAL, OPEN_DeletMODAL, NO_DELETmodal, CLOSE_MODAL, DATATABEL, OPEN_CheckOrderModal, CLOSE_MODAL_CHECKORDER, DATAORDER, COSTOMERDATA, DATAORDERS, FILTERDATACATEGORY } = ShoppingSlice.actions
export default ShoppingSlice.reducer