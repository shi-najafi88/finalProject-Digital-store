import { configureStore } from "@reduxjs/toolkit"
import ShoppingSlice from "./slices/ShoppingSlice"

export const store = configureStore ({
    reducer: {
        shopp: ShoppingSlice
    }
})