import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategory, IProduct } from '../../types/types';
import type { IProductsSlice } from './type';

const initialState: IProductsSlice = {
  currentProduct: null,
  products: [],
  categories: [],
  cart: {},
  isLoading: true,
  isError: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadCurrentProduct(state, { payload }: PayloadAction<IProduct>) {
      state.currentProduct = payload;
      state.isLoading = false;
      state.isError = false;
    },
    loadProducts(state, { payload }: PayloadAction<IProduct[]>) {
      state.products = payload;
      state.isLoading = false;
      state.isError = false;
    },
    loadCategories(state, { payload }: PayloadAction<ICategory[]>) {
      state.categories = payload;
      state.isLoading = false;
      state.isError = false;
    },
    setStatus(state, { payload }: PayloadAction<{ isLoading?: boolean, isError?: boolean }>) {
      payload.isLoading && (state.isLoading = payload.isLoading);
      payload.isError && (state.isError = payload.isError);
    },
  },
})

export const { actions: productsActions } = productsSlice;
export default productsSlice.reducer;
