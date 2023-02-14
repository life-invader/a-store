import type { IProductOptions } from "../pages/product/product-form/type";

export const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU').format(price);
export const prepareSelectData = (array: (string | number)[] | undefined) => {
  if (!array) {
    return undefined;
  }
  return array.map((item, index) => ({ key: String(index), content: String(item) }));
}
export const transformOptions = (options: IProductOptions) => {
  return (Object.keys(options) as Array<keyof IProductOptions>).reduce((acc, item) => {
    const option = options[item];

    if (option) {
      acc[item] = option.content;
    }

    return acc;
  }, {} as { [K in keyof IProductOptions]: string });
}