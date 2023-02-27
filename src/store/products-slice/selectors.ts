import type { StateType } from "../type";

export const selectProducts = (state: StateType) => state.products;
export const selectCategories = (state: StateType) => state.categories;
export const selectCurrentProduct = (state: StateType) => state.currentProduct;
export const selectIsLoading = (state: StateType) => state.isLoading;
export const selectIsError = (state: StateType) => state.isError;
