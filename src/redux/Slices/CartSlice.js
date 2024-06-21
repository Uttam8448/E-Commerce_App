import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //reducer function 2 parameter lete hai state aur action


        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action) =>{
            return state.filter((item) => item.id !== action.payload);
        },
    }
})
export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;
