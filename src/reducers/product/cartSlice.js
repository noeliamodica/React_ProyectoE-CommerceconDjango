import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalCount: 0,
    productsList: [],
  }

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      //lo que ya tengo mas que lo venga en el payload
        state.productsList = [...state.productsList, action.payload];
        state.totalCount += 1;
    },
    removeProductFromCart: (state, action) => {
      //en el payload me pasan en id y se lo resto al estado
      const productId = action.payload;
      state.totalCount -= 1;
      //filtro el estado devolviendo todos menos el que tiene el id identificado
      state.productsList = state.productsList.filter(product => product.id !== productId);
    },
   },
})

// Action creators are generated for each case reducer function
export const { addProductToCart, removeProductFromCart  } = cartSlice.actions

export default cartSlice.reducer