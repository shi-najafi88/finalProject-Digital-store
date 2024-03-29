import { createSlice } from "@reduxjs/toolkit";

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
    getPage:1,
    priceChange:[],
    priceChangeMood:false,
    quantityChange:[],
    quantityChangeMood:false,
    mobaileCategoryData:[],
    laptopCategoryData:[],
    tabletCategoryData:[],
    headsetCategoryData:[],
    radioFilterSidebar_value:'',
    cartProductArray:[],
    modalDeletBasket:false
}
const ShoppingSlice = createSlice({
    name:'shopping/redux',
    initialState,
    reducers:{
        OPEN_EDITMODAL:(state,action) => {
            state. modalEdit = true
            state.productId = action.payload
        },

        REMOVEID:(state,action) => { 
            state.productId = action.payload
        },

        OPEN_AddMODAL:(state) => {
            state.modalAdd = true
        },

        OPEN_DeletMODAL:(state,action) => {
            state.modalDelet = true
            state.productId = action.payload
        },

        OPEN_CheckOrderModal:(state) => {
            state.modalCheckOrder = true
        },

        YES_DELETmodal:(state,action) => {
            state.modalDelet = false 
            action.payload = action.payload.filter(
                (item) => item.id !== state.productId
            ); 
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

        //order table
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
        },

        CURRENTPAGE:(state,action)=> {
            state.getPage = action.payload
        },

        PRICEPRODUCTID:(state,action) => {
            state.productId = action.payload
        },

        QUANTITYPRODUCTID:(state,action) => {
            state.productId = action.payload
        },

        PRICECHANGE:(state,action) => {
            const editList = [...state.priceChange]
            const filterList = editList.filter(item => item.id !== action.payload.id)
            state.priceChange = [...filterList, action.payload]
            state.priceChangeMood = true
            state.quantityChangeMood = false
        },

        QUANTITYCHANGE:(state,action) => {
            const editList = [...state.quantityChange]
            const filterList = editList.filter(item => item.id !== action.payload.id)
            state.quantityChange = [...filterList, action.payload]
            state.quantityChangeMood = true
            state.priceChangeMood = false
        },

        MOBILECATEGORY:(state,action) => {
           state.mobaileCategoryData = action.payload
        },

        LAPTOPCATEGORY:(state,action) => {
            state.laptopCategoryData = action.payload
        },

        TABLETCATEGORY:(state,action) => {
            state.tabletCategoryData = action.payload
        },

        HEADSETCATEGORY:(state,action) => {
            state.headsetCategoryData = action.payload
        },

        RADIOFILTERSIDEBAR:(state,action) => {
            state.radioFilterSidebar_value = action.payload
        },

        CARTPRODUCT:(state,action) => {
            const filtredList = state.cartProductArray.filter(item => item.id !== action.payload.id)
            state.cartProductArray = [...filtredList,action.payload]
        },

        REMOVEFROMCART:(state,action) => {
            const filtredList = state.cartProductArray.filter(item => item.id !== action.payload)
            state.cartProductArray = filtredList
            state.modalDeletBasket = false
            state.productId = 0
        },

        OPEN_DELETBASKETMODAL:(state,action) => {
            state.modalDeletBasket = true
            state.productId = action.payload
        },

        CLOSE_DELETBASKETMODAL:(state) => {
            state.modalDeletBasket = false
            state.productId = 0
        },
    }
})
export const { OPEN_EDITMODAL, OPEN_DeletMODAL, NO_DELETmodal, YES_DELETmodal,
               CLOSE_MODAL, DATATABEL, OPEN_CheckOrderModal, CLOSE_MODAL_CHECKORDER,
               DATAORDER, COSTOMERDATA, DATAORDERS, OPEN_AddMODAL, ALLPRODUCT,
               EDITBTNMODAL, ADDPRODUCT,  CURRENTPAGE, PRICEPRODUCTID, QUANTITYPRODUCTID,
               PRICECHANGE, QUANTITYCHANGE, MOBILECATEGORY, LAPTOPCATEGORY, TABLETCATEGORY,
               HEADSETCATEGORY, RADIOFILTERSIDEBAR,CARTPRODUCT_INFO,
               REMOVEID, CARTPRODUCT, REMOVEFROMCART, OPEN_DELETBASKETMODAL, CLOSE_DELETBASKETMODAL } = ShoppingSlice.actions
export default ShoppingSlice.reducer