import { createSlice } from "@reduxjs/toolkit";

let savedData = JSON.parse(localStorage.getItem("cart")) || [];

const CartSlice=createSlice({
    name:'cart',
    initialState:{
        data:savedData,
        error:null,
        Loading:false
    },

    reducers:{
        addToCart:(state,action)=>{
            const exists=state.data.find(item=> item.id == action.payload.id)
            if(exists){
           alert('Alreday This Item is your Cart🛒')
            }     
            else{
             state.data.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.data))
            }
         
        },
        RemoveFromCart:(state,action)=>{
            state.data=state.data.filter(data=> data.id !== action.payload)
            localStorage.setItem('cart',JSON.stringify(state.data))
        },
        clearCart:(state)=>{
            state.data=[]
        }
    }
})

export const {addToCart,RemoveFromCart,clearCart}=CartSlice.actions;

export const CartFuncations=CartSlice.reducer

export default CartFuncations;