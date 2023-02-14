import type { IProductOptions } from "../product-form/type";

export interface ISelectProps {
  options: { key: string; content: string }[] | undefined;
  selected: { key: string; content: string } | undefined;
  label: string;
  name: string;
  onChange: (option: Partial<IProductOptions>) => void;
}