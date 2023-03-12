import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    modalEdit: false,
    modalAdd: false,
    modalDelet: false,
    modalCheckOrder: false,
    listData:[],
    orderData:[],
    costomerData:[],
    ordersData:[],
    productId:0,
    allProduct:[],
    saveProductInfo:[]
}
const ShoppingSlice = createSlice({
    name:'shopping/redux',
    initialState,
    reducers:{
        OPEN_EDITMODAL:(state,action) => {
            state. modalEdit = true
            state.productId = action.payload
        },

        OPEN_AddMODAL:(state) => {
            state.modalAdd = true
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
            state.modalAdd = false
        },

        CLOSE_MODAL_CHECKORDER:(state) => {
            state.modalCheckOrder = false
        },

        DATATABEL:(state,action)=> {
            state.listData = []
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

        ALLPRODUCT:(state,action)=> {
            state.allProduct = action.payload
            console.log(state.allProduct);
        },

        EDITBTNMODAL:(state,action)=> {
            // state.itemProductInfo = action.payload
            console.log(state.allProduct);
            const FindeIndex = state.allProduct.findIndex(item => item.id === state.productId);
            state.allProduct.splice(FindeIndex, 1, action.payload);
 
        },

        ADDPRODUCT:(state,action)=> {
             state.saveProductInfo = action.payload
             console.log(state.saveProductInfo);

            try{
                axios.post('http://localhost:3002/products',{
                    thumbnail:state.saveProductInfo.image,
                    name: state.saveProductInfo.name,
                    categoryname:state.saveProductInfo.categoryname
                })
                .then(res=> console.log(res.data))
            }
            catch(err){
                console.log(err);
            }
            
        }
    }
})
export const { OPEN_EDITMODAL, OPEN_DeletMODAL, NO_DELETmodal, CLOSE_MODAL, DATATABEL, OPEN_CheckOrderModal, CLOSE_MODAL_CHECKORDER, DATAORDER, COSTOMERDATA, DATAORDERS, OPEN_AddMODAL, ALLPRODUCT, EDITBTNMODAL, ADDPRODUCT } = ShoppingSlice.actions
export default ShoppingSlice.reducer