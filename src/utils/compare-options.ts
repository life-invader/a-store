import type { IProductOptions } from "../types/types";

export const compareOptions = (optionsA: IProductOptions, optionsB: IProductOptions) => {
  const array = Object.keys(optionsA) as Array<keyof IProductOptions>;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (optionsA[element] !== optionsB[element]) {
      return false;
    }
  }

  return true;
}