import type { IProductPreview } from "../../../types/types";

export interface ICatalogListProps {
  products: IProductPreview[];
  title?: string;
  description?: string;
}