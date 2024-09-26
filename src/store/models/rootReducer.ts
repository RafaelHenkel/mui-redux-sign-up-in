import { combineReducers } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import ProductsSlice from './ProductsSlice';

export default combineReducers({
  users: UserSlice,
  products: ProductsSlice,
});
