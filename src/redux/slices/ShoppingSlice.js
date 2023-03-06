import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    modalEdit: false,
    modalDelet: false,
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

        NO_DELETmodal:(state) => {
            state.modalDelet = false
        },

        CLOSE_MODAL:(state) => {
            state.modalEdit = false
        },
    }

})
export const { OPEN_MODAL, OPEN_DeletMODAL, NO_DELETmodal, CLOSE_MODAL } = ShoppingSlice.actions
export default ShoppingSlice.reducer