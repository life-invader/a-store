// Интерфейс для отображения карточки товара в каталоге. Содержит не всю инфу про товар
export interface IProductPreview {
  id: number;
  preview: string;
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  availability: boolean;
}

// Интерфейс для отображения страницы товара. Содержит всю инфу про товар
export interface IProduct extends IProductPreview {
  images: string[];
  sizes?: string[];
  colors?: string[];
  models?: string[];
  stickerNumbers?: number[];
}

export interface ICategory {
  id: number;
  title: string;
  description: string;
  products: IProductPreview[];
}
