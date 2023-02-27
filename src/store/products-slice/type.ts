import type { ICategory, IProduct, IProductPreview } from "../../types/types";

export interface IProductsSlice {
  currentProduct: IProduct | null;
  products: IProductPreview[];
  categories: ICategory[];
  cart: {};
  isLoading: boolean;
  isError: boolean;
}