import type { ISelectOptions } from "../product-form/type";

export interface ISelectProps {
  options: { key: string; content: string }[];
  selected: { key: string; content: string } | undefined;
  label: string;
  name: string;
  onChange: (option: Partial<ISelectOptions>) => void;
}