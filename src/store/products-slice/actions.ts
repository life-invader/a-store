import { createAction } from "@reduxjs/toolkit";

export const getAlfaProductsAction = createAction('products/getProducts');
export const getCustomProductsAction = createAction('products/getCategories');
export const getProductAction = createAction<string>('products/getProduct');
