import { createAction } from "@reduxjs/toolkit";
import { IFormValues } from "../../pages/checkout/type";

export const getAlfaProductsAction = createAction('products/getProducts');
export const getCustomProductsAction = createAction('products/getCategories');
export const getProductAction = createAction<string>('products/getProduct');
export const postOrderAction = createAction<IFormValues>('products/postOrder');
