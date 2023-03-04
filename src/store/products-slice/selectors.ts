import { createSelector } from "@reduxjs/toolkit";
import type { StateType } from "../type";

export const selectProducts = (state: StateType) => state.products;
export const selectCategories = (state: StateType) => state.categories;
export const selectCurrentProduct = (state: StateType) => state.currentProduct;
export const selectIsLoading = (state: StateType) => state.isLoading;
export const selectIsError = (state: StateType) => state.isError;
export const selectCart = (state: StateType) => state.cart;
export const selectIsCartEmpty = createSelector(selectCart, (cart) => {
  return cart.length > 0;
});
export const selectIsCartLength = createSelector(selectCart, (cart) => {
  return cart.reduce((acc, item) => {
    return acc += item.quantity
  }, 0);
});
export const selectCartTotalCost = createSelector(selectCart, (cart) => cart.reduce((acc, { itemTotal }) => acc += itemTotal, 0));
