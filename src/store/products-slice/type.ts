import { OrderStatus } from "../../constants/common";
import type { ICartItem, ICategory, IProduct, IProductPreview } from "../../types/types";

export interface IProductsSlice {
  currentProduct: IProduct | null;
  products: IProductPreview[];
  categories: ICategory[];
  cart: ICartItem[];
  isLoading: boolean;
  isError: boolean;
  orderStatus: OrderStatus;
}