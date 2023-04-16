import { createSlice, current } from "@reduxjs/toolkit";

 const ProductSlice = createSlice({
    name:'productFeature',
    initialState:{
        AllProducts:[],
        gridShow:true,
        Filters:''
    },
    reducers:{
       getAllProduct(state,{payload}){
            state.AllProducts = payload
       },
       

       FilterSearch(state,action){
        let SearchValue = action.payload
        if(SearchValue){
             var  update =  state.AllProducts.filter((elem) => elem.name.toLowerCase().includes(SearchValue))
             return  {...state, AllProducts :  update}
           }
       },

    }
 })


export const { getAllProduct  , FilterSearch} = ProductSlice.actions
 export default ProductSlice.reducer