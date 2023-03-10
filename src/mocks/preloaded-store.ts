import { OrderStatus } from "../constants/common";
import type { IProductsSlice } from "../store/products-slice/type";
import { AlfaMadeProductsMock } from "./api-made-in-alfa";
import { CustomDesignProductsMock } from "./api-your-design";

export const preloadedStore: IProductsSlice = {
  currentProduct: {
    "id": 0,
    "preview": "http://qa-games.ru/astore/public/images/15586005.jpeg",
    "images": [
      "http://qa-games.ru/astore/public/images/15586005.jpeg",
      "http://qa-games.ru/astore/public/images/45862782.jpeg",
      "http://qa-games.ru/astore/public/images/75259815.jpeg"
    ],
    "title": "Рюкзак «Для умных и свободных»",
    "description": "Поместится и ноутбук, и худи. У рюкзака широкие красные лямки и светоотражающие элементы — вас заметят и днём, и ночью.",
    "price": 4999,
    "availability": true,
    colors: ['red', 'blue', 'black'],
  },
  products: AlfaMadeProductsMock,
  categories: CustomDesignProductsMock,
  cart: [
    {
      item: {
        "id": 0,
        "preview": "http://qa-games.ru/astore/public/images/15586005.jpeg",
        "images": [
          "http://qa-games.ru/astore/public/images/15586005.jpeg",
          "http://qa-games.ru/astore/public/images/45862782.jpeg",
          "http://qa-games.ru/astore/public/images/75259815.jpeg"
        ],
        "title": "Рюкзак «Для умных и свободных»",
        "description": "Поместится и ноутбук, и худи. У рюкзака широкие красные лямки и светоотражающие элементы — вас заметят и днём, и ночью.",
        "price": 4999,
        "availability": true,
        colors: ['red', 'blue', 'black'],
      },
      quantity: 1,
      itemTotal: 4999,
      options: {
        color: 'blue',
      }
    }
  ],
  isLoading: false,
  isError: false,
  orderStatus: OrderStatus.Default
}