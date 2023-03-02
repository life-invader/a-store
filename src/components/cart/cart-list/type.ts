import type { IProductOptions } from "../../../types/types";

export type OptionNameType = {
  [K in keyof IProductOptions]: string;
}