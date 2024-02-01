"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
}


export const shoppingBasketSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCArt: (state, action) => {
      const { id, numPrice, quantityProduct} = action.payload;
      const existingProduct = state.card.find((item) => item.id === id)

      if(existingProduct) {
        existingProduct.numPrice += Number(numPrice);
        existingProduct.quantityProduct += quantityProduct
      } else {
        state.card.push(action.payload)
      }
    },
    removeCart: (state, action) => {
      state.card = state.card.filter((x) => x.id !== action.payload)
    },
    risingPrice: (state, action) => {
      const {id} = action.payload
      const product = state.card.find(item => item.id === id);
      if(product) {
        product.numPrice += product.firstPrice
        product.quantityProduct += 1
      }
    },
    decliningPrice: (state, action) => {
      const {id} = action.payload
      const product = state.card.find(item => item.id === id);
      if(product) {
        if(product.quantityProduct > 1) {
          product.quantityProduct -= 1
          product.numPrice -= product.firstPrice
        }
      }
    },
  },
});

export const { addToCArt, removeCart, risingPrice,decliningPrice } = shoppingBasketSlice.actions

export default shoppingBasketSlice.reducer;