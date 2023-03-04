import type { ISelectOptions } from "../pages/product/product-form/type";
import type { IProductOptions } from "../types/types";

export const transformOptions = (options: ISelectOptions) => {
  return (Object.keys(options) as Array<keyof IProductOptions>).reduce((acc, item) => {
    const option = options[item];

    if (option) {
      acc[item] = option.content;
    }

    return acc;
  }, {} as { [K in keyof IProductOptions]?: string });
}
