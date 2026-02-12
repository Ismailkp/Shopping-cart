
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const ApiData=createAsyncThunk(
    'UserData',
    async ()=>{
        let res=await fetch('https://dummyjson.com/products?limit=0')
        return res.json()
    }
)


export const UserDataSlice=createSlice({
    name:'ApiData',
    initialState:{
     data:[],
     error:null,
     loading:false
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(ApiData.pending,(state)=>{
          state.loading=true;
        })
        .addCase(ApiData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload.products;
        })
        .addCase(ApiData.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export const UserApiData=UserDataSlice.reducer

export default UserApiData;