import type { ICategory, IProduct } from "../../types/types";

export interface IProductsSlice {
  currentProduct: IProduct | null;
  products: IProduct[];
  categories: ICategory[];
  cart: {};
  isLoading: boolean;
  isError: boolean;
}