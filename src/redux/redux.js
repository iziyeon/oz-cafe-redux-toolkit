import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from "../assets/data"


const menu = createSlice({
  name : 'menu',
  initialState : data.menu,
  reducers:{}
})

const cart = createSlice({
  name : 'cart',
  initialState : [],
  reducers:{
    addItemToCart(state, action){
      return[...state, action.payload]
    },
    removeItemFromCart(state, action){
      return state.filter((el) => action.payload !== el.id);
    }
  }
}
)
export let {addItemToCart, removeItemFromCart} = cart.actions

export const cafeStore = configureStore({
  reducer: { 
      menu : menu.reducer,
      cart : cart.reducer,
  }
}) 

