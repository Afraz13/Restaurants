import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestuarent = createAsyncThunk('restaurentList/fetchRestuarent',()=>{
    // api call
   const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
   console.log(result);
   return result
    
})




const restSlice = createSlice({
    name:'restaurentList',
    initialState:{
        loading:false,
        // pending
        allrestaurent :[], 
        // resolve
        searchRestaurent :[],
        error:""
        // reject
    },
    extraReducers:(builder)=>{
        // build hold value/response from thunk
        builder.addCase(fetchRestuarent.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRestuarent.fulfilled,(state,action)=>{
            state.loading=false
            state.allrestaurent = action.payload
            state.searchRestaurent = action.payload
            state.error = ""
        })
        builder.addCase(fetchRestuarent.rejected,(state,action)=>{
            state.loading=false
            state.allrestaurent = ""
            state.error = action.error.message
        })
    },
    // reducers:{
    //     search :(state,action)=>{
    //         state.allrestaurent = state.searchRestaurent.filter(item=>item.neighborhood.toLoweCase().includes(action.payload.toLoweCase()))
            
    //     }
    // }
    reducers:{
        search:( state, action)=>{
          state.allrestaurent=state.searchRestaurent.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
      }
})
export const {search} = restSlice.actions


export default restSlice.reducer