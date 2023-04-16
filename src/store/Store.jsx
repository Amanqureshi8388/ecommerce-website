import {configureStore} from '@reduxjs/toolkit'
import ApiSlice from './ApiStore'
import ProductSlice from './ProductSlice'
import FilterProductSlice from './FilterProductSlice'
import AddToCartSlice from './AddToCartSlice'



const store = configureStore({
    reducer:{
        ApiReducer: ApiSlice,
        ProductFeatureReducer: ProductSlice,
        FilterProduct: FilterProductSlice,
        AddToCartReducer: AddToCartSlice,
    }
})

export default store
