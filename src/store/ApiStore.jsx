import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios'







 const ApiSlice = createSlice({
     name:'Api',
     initialState:{
        isLoading:false,
        isError:true,
        getData:[],
        featureProducts:[],
        singleProduct:{}
     },

    extraReducers:(builder)=>{
        builder
        .addCase(FetchApi.pending, (state,action)=>{
            state.isLoading = true
        })
        .addCase(FetchApi.fulfilled, (state,action)=>{
            state.isLoading = false
            state.getData = action.payload 
            
        })


        .addCase(FetchSingleProductApi.pending,(state,action)=>{
            state.isLoading = true
        })
        .addCase(FetchSingleProductApi.fulfilled,(state,action)=>{
             state.singleProduct = action.payload
             state.isLoading = false
  
        })
    }
})

// export const {featureProduct } = ApiSlice.actions

export default ApiSlice.reducer



export const FetchApi = createAsyncThunk('api/myname', async () =>{
      const data = await fetch(`https://api.pujakaitem.com/api/products`)
      const res = data.json()
      return res

})

export const FetchSingleProductApi = createAsyncThunk('api/single', async (id) =>{
    const data = await fetch(`https://api.pujakaitem.com/api/products?id=${id}`)
    const res = data.json()
    return res

})