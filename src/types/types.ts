export interface IProduct {
  id: number;
  preview: string;
  images: string[],
  title: string;
  subtitle?: string;
  description: string,
  sizes?: string[],
  colors?: string[],
  price: number;
  availability: boolean;
  models?: string[]
  stickerNumbers?: number[],
}

export interface ICategory {
  id: number,
  title: string,
  description: string,
  products: IProduct[]
}