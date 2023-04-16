import { createSlice } from "@reduxjs/toolkit";




const FilterSlice = createSlice({
    name: "filter",
    initialState: {
          SearchValue:'',
          FilterSearchProduct:[]

    },

    reducers:{

        SearchFuc(state,action){
            state.SearchValue = action.payload
           },  
    }
    

})


export const {   FilterSearch , SearchFuc } = FilterSlice.actions;

export default FilterSlice.reducer;
