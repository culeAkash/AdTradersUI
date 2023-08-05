import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../Features/Products/ProductSlice'
import CategoryReducer from '../Features/Category/CategorySlice'


export const store = configureStore({
    reducer: {
        products: ProductReducer,
        categories: CategoryReducer
    }
})