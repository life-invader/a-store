import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductMock } from '../../mocks/api-product';
import type { ICartItem, ICategory, IProduct, IProductPreview, IProductOptions } from '../../types/types';
import type { IProductsSlice } from './type';

// ======================================================================================================================
const item: ICartItem = {
  item: ProductMock,
  quantity: 1,
  itemTotal: 4899,
  options: {
    color: 'blue'
  },
};
const preloadedCart = [item] as ICartItem[];

const compareOptions = (item: ICartItem, options: IProductOptions) => {
  if (!Object.keys(item).length) {
    return true;
  }

  const array = Object.keys(item.options) as Array<keyof IProductOptions>;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (item.options[element] !== options[element]) {
      return false;
    }
  }

  return true;
}
// ======================================================================================================================

const initialState: IProductsSlice = {
  currentProduct: null,
  products: [],
  categories: [],
  cart: preloadedCart,
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
      const cartItems = state.cart.filter((item) => item.item.id === state.currentProduct?.id);
      const itemFound = cartItems.filter((item) => compareOptions(item, payload))[0];

      if (itemFound) {
        itemFound.quantity += 1;
        itemFound.itemTotal = itemFound.quantity * itemFound.item.price;
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
      const cartItems = state.cart.filter((item) => item.item.id === payload.item.id);
      const itemFound = cartItems.filter((item) => compareOptions(item, payload.options))[0];

      if (!itemFound) {
        return;
      }

      itemFound.quantity += 1;
      itemFound.itemTotal = itemFound.quantity * itemFound.item.price;
    },
    decrementCartItem(state, { payload }: PayloadAction<ICartItem>) {
      const cartItems = state.cart.filter((item) => item.item.id === payload.item.id);
      const itemFound = cartItems.filter((item) => compareOptions(item, payload.options))[0];

      if (!itemFound) {
        return;
      }

      itemFound.quantity = itemFound.quantity - 1 === 0 ? 1 : itemFound.quantity - 1;
      itemFound.itemTotal = itemFound.quantity * itemFound.item.price;
    },
    removeCartItem(state, { payload }: PayloadAction<ICartItem>) {
      const cartItems = state.cart.filter((item) => item.item.id === payload.item.id);
      const itemFound = cartItems.filter((item) => compareOptions(item, payload.options))[0];

      if (!itemFound) {
        return;
      }

      state.cart = state.cart.filter((item) => item !== itemFound);
    },
  },
})

export const { actions: productsActions } = productsSlice;
export default productsSlice.reducer;
