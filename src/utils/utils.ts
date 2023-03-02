import type { ISelectOptions } from "../pages/product/product-form/type";
import type { ICartItem, IProductOptions } from "../types/types";

export const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU').format(price);
export const prepareSelectData = (array: (string | number)[] | undefined) => {
  if (!array) {
    return undefined;
  }
  return array.map((item, index) => ({ key: String(index), content: String(item) }));
}
export const transformOptions = (options: ISelectOptions) => {
  return (Object.keys(options) as Array<keyof IProductOptions>).reduce((acc, item) => {
    const option = options[item];

    if (option) {
      acc[item] = option.content;
    }

    return acc;
  }, {} as { [K in keyof IProductOptions]?: string });
}
export const compareOptions = (item: ICartItem, options: IProductOptions) => {
  if (!Object.keys(item.options).length) {
    return true;
  }

  const array = Object.keys(item.options) as Array<keyof IProductOptions>;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (item.options[element] !== options[element]) {
      return false;
    }
  }

  return true;
}
export const generateUniqueKey = (id: number, obj: object) => {
  const string = Object.values(obj).toString();
  return `${id}-${string}`;
};