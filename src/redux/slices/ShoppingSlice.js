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
    saveProductInfo:[],
    getPage:1,
    priceChange:0,
    priceChangeMood:false,
    quantityChange:0,
    quantityChangeMood:false,
    mobaileCategoryData:[],
    laptopCategoryData:[],
    tabletCategoryData:[],
    headsetCategoryData:[],
    radioFilterSidebar_value:''
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

        EDITBTNMODAL:(state,action)=> { 
            const FindeIndex = state.allProduct.findIndex(item => item.id === state.productId);
            state.allProduct.splice(FindeIndex, 1, action.payload);
        },

        // ADDPRODUCT:(state,action)=> {
        //      state.saveProductInfo = action.payload
        // },

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
            state.priceChange = action.payload
            state.priceChangeMood = true
            state.quantityChangeMood = false
        },

        QUANTITYCHANGE:(state,action) => {
            state.quantityChange = action.payload
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

    }
})
export const { OPEN_EDITMODAL, OPEN_DeletMODAL, NO_DELETmodal, YES_DELETmodal,
               CLOSE_MODAL, DATATABEL, OPEN_CheckOrderModal, CLOSE_MODAL_CHECKORDER,
               DATAORDER, COSTOMERDATA, DATAORDERS, OPEN_AddMODAL, ALLPRODUCT,
               EDITBTNMODAL, ADDPRODUCT,  CURRENTPAGE, PRICEPRODUCTID, QUANTITYPRODUCTID,
               PRICECHANGE, QUANTITYCHANGE, MOBILECATEGORY, LAPTOPCATEGORY, TABLETCATEGORY,
               HEADSETCATEGORY, RADIOFILTERSIDEBAR } = ShoppingSlice.actions
export default ShoppingSlice.reducer