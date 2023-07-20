import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({

    name : 'cart',
    initialState : {
        value : [
  
        ]
    },
    reducers : { 
        //actions , you can call it action  / payload
        addItem : (state , action) => {
            // how do you update to your state ? 
            state.value.push(action.payload);

        },
        deleteItem : (state) => {
            // how do you update to your state ? 
            state.value.pop();

        },
        clearCart : (state) => {
            state.value = [];
        }

    }
})

export const {addItem,deleteItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;

// reducer updates the store , actions is to tell which type of update.
// the state which we are passing in the addItem and deleteItem is nothing but the initial state we are updating 
