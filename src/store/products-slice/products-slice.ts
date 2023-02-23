import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { compareOptions } from '../../utils/utils';
import type { ICartItem, ICategory, IProduct, IProductPreview, IProductOptions } from '../../types/types';
import type { IProductsSlice } from './type';

const initialState: IProductsSlice = {
  currentProduct: null,
  products: [],
  categories: [],
  cart: [],
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
    loadProducts(state, { payload }: PayloadAction<IProductPreview[]>) {
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
    loadItemToCart(state, { payload }: PayloadAction<IProductOptions>) {
      const itemsWithSameId = state.cart.filter(({ item }) => item.id === state.currentProduct?.id);
      const foundItem = itemsWithSameId.filter((item) => compareOptions(item, payload))[0];

      if (foundItem) {
        foundItem.quantity += 1;
        foundItem.itemTotal = foundItem.quantity * foundItem.item.price;
      } else {
        const cartItem: ICartItem = {
          item: state.currentProduct!,
          quantity: 1,
          itemTotal: state.currentProduct!.price,
          options: payload,
        }
        state.cart.push(cartItem);
      }
    },
    incrementCartItem(state, { payload }: PayloadAction<ICartItem>) {
      const itemsWithSameId = state.cart.filter((item) => item.item.id === payload.item.id);
      const foundItem = itemsWithSameId.filter((item) => compareOptions(item, payload.options))[0];

      if (!foundItem) {
        return;
      }

      foundItem.quantity += 1;
      foundItem.itemTotal = foundItem.quantity * foundItem.item.price;
    },
    decrementCartItem(state, { payload }: PayloadAction<ICartItem>) {
      const itemsWithSameId = state.cart.filter((item) => item.item.id === payload.item.id);
      const foundItem = itemsWithSameId.filter((item) => compareOptions(item, payload.options))[0];

      if (!foundItem) {
        return;
      }

      foundItem.quantity = foundItem.quantity - 1 === 0 ? 1 : foundItem.quantity - 1;
      foundItem.itemTotal = foundItem.quantity * foundItem.item.price;
    },
    removeCartItem(state, { payload }: PayloadAction<ICartItem>) {
      const itemsWithSameId = state.cart.filter((item) => item.item.id === payload.item.id);
      const foundItem = itemsWithSameId.filter((item) => compareOptions(item, payload.options))[0];

      if (!foundItem) {
        return;
      }

      state.cart = state.cart.filter((item) => item !== foundItem);
    },
  },
})

export const { actions: productsActions } = productsSlice;
export default productsSlice.reducer;
