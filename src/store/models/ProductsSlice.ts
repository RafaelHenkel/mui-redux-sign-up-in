import { createSlice } from '@reduxjs/toolkit';

interface ProductsType {
  id?: number;
  name: string;
  price: number;
  amount: number;
}

const initialState: ProductsType[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({ ...action.payload, id: state.length + 1, amount: 1 });
    },
    addProductToCart: (state, action) => {
      const searchProduct = state.find(product => product.id === action.payload.id);
      if (searchProduct) {
        searchProduct.amount += 1;
        return;
      }
    },
    delProductToCart: (state, action) => {
      const searchProduct = state.find(product => product.id === action.payload.id);
      if (searchProduct && searchProduct.amount > 1) {
        searchProduct.amount -= 1;
        return;
      }
      const index = state.findIndex(product => product.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addProduct, addProductToCart, delProductToCart } = productsSlice.actions;
export default productsSlice.reducer;
