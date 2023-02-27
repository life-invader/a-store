import type { ICategory, IProduct } from './types/types';

export const Products: IProduct[] = [
  {
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
    "availability": true
  },
  {
    "id": 1,
    "preview": "http://qa-games.ru/astore/public/images/68519498.jpeg",
    "images": [
      "http://qa-games.ru/astore/public/images/68519498.jpeg",
      "http://qa-games.ru/astore/public/images/56653281.jpeg",
      "http://qa-games.ru/astore/public/images/22582542.jpeg"
    ],
    "title": "Футболка Для умных и свободных",
    "description": "Мягкая хлопковая футболка для тех, кто любит быть в центре внимания. Состав и способ ухода вынесли на самое видное место.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "white",
      "black",
      "red"
    ],
    "price": 1999,
    "availability": true
  },
  {
    "id": 2,
    "preview": "http://qa-games.ru/astore/public/images/77117755.jpeg",
    "images": [
      "http://qa-games.ru/astore/public/images/77117755.jpeg",
      "http://qa-games.ru/astore/public/images/13519755.jpeg"
    ],
    "title": "Блокнот Для умных и свободных",
    "description": "Под твёрдой обложкой — 300 белых страниц с градиентом. Должно хватить для небольшого романа или рабочих записей.",
    "price": 1499,
    "availability": true
  },
  {
    "id": 3,
    "preview": "http://qa-games.ru/astore/public/images/15932051.jpeg",
    "images": [
      "http://qa-games.ru/astore/public/images/15932051.jpeg",
      "http://qa-games.ru/astore/public/images/83549212.jpeg"
    ],
    "title": "Чехол с кардхолдером",
    "description": "Чтобы карта всегда была под рукой. К чехлу мы сделали яркий стикер — вам решать, клеить его или нет.",
    "price": 799,
    "availability": false,
    "models": [
      "iPhone 11",
      "iPhone 11 Pro",
      "iPhone 11 Pro Max",
      "iPhone 12",
      "iPhone 12 Pro",
      "iPhone 12 Pro Max",
      "iPhone 13",
      "iPhone 13 Pro",
      "iPhone 13 Pro Max",
      "iPhone 14",
      "iPhone 14 Plus",
      "iPhone 14 Pro",
      "iPhone 14 Pro Max"
    ]
  },
  {
    "id": 4,
    "preview": "http://qa-games.ru/astore/public/images/56369345.jpeg",
    "images": [
      "http://qa-games.ru/astore/public/images/56369345.jpeg",
      "http://qa-games.ru/astore/public/images/10.jpeg"
    ],
    "title": "Экоручка",
    "description": "Мы сделали ручки из переработанной офисной бумаги. У нас всё идёт в дело.",
    "price": 99,
    "colors": [
      "red",
      "black"
    ],
    "availability": true
  },
];

export const CustomDesignProducts: { groups: ICategory[] } = {
  "groups": [
    {
      "id": 0,
      "title": "Бархатные стикеры",
      "description": "Тактильный антистресс",
      "products": [
        {
          "id": 5,
          "preview": "http://qa-games.ru/astore/public/images/43306375.jpeg",
          "images": [
            "http://qa-games.ru/astore/public/images/43306375.jpeg",
            "http://qa-games.ru/astore/public/images/25133982.png",
            "http://qa-games.ru/astore/public/images/93661622.png",
            "http://qa-games.ru/astore/public/images/1_3d.png",
            "http://qa-games.ru/astore/public/images/2_3d.png",
            "http://qa-games.ru/astore/public/images/45157942.png",
            "http://qa-games.ru/astore/public/images/Frame_118.png"
          ],
          "title": "Худи с бархатными стикерами",
          "subtitle": "Выберите один из восьми стикеров",
          "price": 4199,
          "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
          "colors": [
            "white",
            "black",
            "red"
          ],
          "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
          ],
          "stickerNumbers": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8
          ],
          "availability": true
        },
        {
          "id": 6,
          "preview": "http://qa-games.ru/astore/public/images/61646585.png",
          "images": [
            "http://qa-games.ru/astore/public/images/61646585.png",
            "http://qa-games.ru/astore/public/images/29918301.png",
            "http://qa-games.ru/astore/public/images/23597101.png",
            "http://qa-games.ru/astore/public/images/79160052.png",
            "http://qa-games.ru/astore/public/images/34570797.png",
            "http://qa-games.ru/astore/public/images/95291281.png",
            "http://qa-games.ru/astore/public/images/1_3d.png",
            "http://qa-games.ru/astore/public/images/2_3d.png",
            "http://qa-games.ru/astore/public/images/45157942.png",
            "http://qa-games.ru/astore/public/images/Frame_117.png"
          ],
          "title": "Футболка с бархатными стикерами",
          "subtitle": "Все варианты — внутри",
          "price": 1799,
          "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
          "colors": [
            "white",
            "black",
            "red",
            "green",
            "gray"
          ],
          "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
          ],
          "stickerNumbers": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8
          ],
          "availability": true
        },
        {
          "id": 7,
          "preview": "http://qa-games.ru/astore/public/images/51168667.png",
          "images": [
            "http://qa-games.ru/astore/public/images/51168667.png",
            "http://qa-games.ru/astore/public/images/54431023.png",
            "http://qa-games.ru/astore/public/images/18640580.png",
            "http://qa-games.ru/astore/public/images/11697722.png",
            "http://qa-games.ru/astore/public/images/95291281.png",
            "http://qa-games.ru/astore/public/images/1_3d.png",
            "http://qa-games.ru/astore/public/images/2_3d.png",
            "http://qa-games.ru/astore/public/images/45157942.png",
            "http://qa-games.ru/astore/public/images/Frame_119.png"
          ],
          "title": "Футболка оверсайз с бархатными стикерами",
          "subtitle": "Нажмите, чтобы выбрать стикер",
          "price": 1799,
          "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
          "colors": [
            "white",
            "black",
            "red",
            "gray"
          ],
          "sizes": [
            "S",
            "M",
            "L",
            "XL"
          ],
          "stickerNumbers": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8
          ],
          "availability": true
        }
      ]
    },
    {
      "id": 1,
      "title": "FLAT-стикеры",
      "description": "Тема для обсуждения в любой компании",
      "products": [
        {
          "id": 8,
          "preview": "http://qa-games.ru/astore/public/images/80077475.png",
          "images": [
            "http://qa-games.ru/astore/public/images/80077475.png",
            "http://qa-games.ru/astore/public/images/75526651.png",
            "http://qa-games.ru/astore/public/images/38611794.png",
            "http://qa-games.ru/astore/public/images/72845408.png",
            "http://qa-games.ru/astore/public/images/15216328.png",
            "http://qa-games.ru/astore/public/images/88922367.png",
            "http://qa-games.ru/astore/public/images/28363383.png",
            "http://qa-games.ru/astore/public/images/5_3d.png",
            "http://qa-games.ru/astore/public/images/45120806.png",
            "http://qa-games.ru/astore/public/images/20347646.png",
            "http://qa-games.ru/astore/public/images/8_3d.png",
            "http://qa-games.ru/astore/public/images/Frame_118.png"
          ],
          "title": "Худи с FLAT-стикерами",
          "subtitle": "Выберите один из 20 стикеров",
          "price": 4149,
          "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
          "colors": [
            "white",
            "black",
            "red"
          ],
          "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
          ],
          "stickerNumbers": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "availability": true
        },
        {
          "id": 9,
          "preview": "http://qa-games.ru/astore/public/images/64963633.png",
          "images": [
            "http://qa-games.ru/astore/public/images/64963633.png",
            "http://qa-games.ru/astore/public/images/61838715.png",
            "http://qa-games.ru/astore/public/images/33717334.png",
            "http://qa-games.ru/astore/public/images/40444416.png",
            "http://qa-games.ru/astore/public/images/51875593.png",
            "http://qa-games.ru/astore/public/images/72845408.png",
            "http://qa-games.ru/astore/public/images/15216328.png",
            "http://qa-games.ru/astore/public/images/88922367.png",
            "http://qa-games.ru/astore/public/images/28363383.png",
            "http://qa-games.ru/astore/public/images/5_3d.png",
            "http://qa-games.ru/astore/public/images/45120806.png",
            "http://qa-games.ru/astore/public/images/20347646.png",
            "http://qa-games.ru/astore/public/images/8_3d.png",
            "http://qa-games.ru/astore/public/images/Frame_117.png"
          ],
          "title": "Футболка с FLAT-стикерами",
          "subtitle": "Все варианты — внутри",
          "price": 1749,
          "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
          "colors": [
            "white",
            "black",
            "red",
            "green",
            "gray"
          ],
          "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
          ],
          "stickerNumbers": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "availability": true
        },
        {
          "id": 10,
          "preview": "http://qa-games.ru/astore/public/images/48495271.png",
          "images": [
            "http://qa-games.ru/astore/public/images/48495271.png",
            "http://qa-games.ru/astore/public/images/88284218.png",
            "http://qa-games.ru/astore/public/images/33710051.png",
            "http://qa-games.ru/astore/public/images/43358772.png",
            "http://qa-games.ru/astore/public/images/43358772.png",
            "http://qa-games.ru/astore/public/images/72845408.png",
            "http://qa-games.ru/astore/public/images/15216328.png",
            "http://qa-games.ru/astore/public/images/88922367.png",
            "http://qa-games.ru/astore/public/images/28363383.png",
            "http://qa-games.ru/astore/public/images/5_3d.png",
            "http://qa-games.ru/astore/public/images/45120806.png",
            "http://qa-games.ru/astore/public/images/20347646.png",
            "http://qa-games.ru/astore/public/images/8_3d.png",
            "http://qa-games.ru/astore/public/images/Frame_119.png"
          ],
          "title": "Футболка оверсайз с FLAT-стикерами",
          "subtitle": "Нажмите, чтобы выбрать стикер",
          "price": 1949,
          "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
          "colors": [
            "white",
            "black",
            "red",
            "gray"
          ],
          "sizes": [
            "S",
            "M",
            "L",
            "XL"
          ],
          "stickerNumbers": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "availability": true
        }
      ]
    },
    {
      "id": 2,
      "title": "3D-стикеры",
      "description": "Дизайн с эффектом объёмного градиента",
      "products": [
        {
          "id": 11,
          "preview": "http://qa-games.ru/astore/public/images/89787126.png",
          "images": [
            "http://qa-games.ru/astore/public/images/89787126.png",
            "http://qa-games.ru/astore/public/images/55898751.png",
            "http://qa-games.ru/astore/public/images/91799983.png",
            "http://qa-games.ru/astore/public/images/55576665.png",
            "http://qa-games.ru/astore/public/images/21845719.png",
            "http://qa-games.ru/astore/public/images/3_3d.png",
            "http://qa-games.ru/astore/public/images/98901313.png",
            "http://qa-games.ru/astore/public/images/55667992.png",
            "http://qa-games.ru/astore/public/images/93581607.png",
            "http://qa-games.ru/astore/public/images/Frame_118.png"
          ],
          "title": "Худи с 3D-стикерами",
          "subtitle": "Нажмите, чтобы выбрать стикер",
          "price": 4099,
          "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
          "colors": [
            "white",
            "black",
            "red"
          ],
          "sizes": [
            "S",
            "M",
            "L",
            "XL"
          ],
          "stickerNumbers": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
          ],
          "availability": true
        },
        {
          "id": 12,
          "preview": "http://qa-games.ru/astore/public/images/85987507.png",
          "images": [
            "http://qa-games.ru/astore/public/images/85987507.png",
            "http://qa-games.ru/astore/public/images/17136558.png",
            "http://qa-games.ru/astore/public/images/96879331.png",
            "http://qa-games.ru/astore/public/images/65470065.png",
            "http://qa-games.ru/astore/public/images/24884253.png",
            "http://qa-games.ru/astore/public/images/55576665.png",
            "http://qa-games.ru/astore/public/images/21845719.png",
            "http://qa-games.ru/astore/public/images/3_3d.png",
            "http://qa-games.ru/astore/public/images/98901313.png",
            "http://qa-games.ru/astore/public/images/55667992.png",
            "http://qa-games.ru/astore/public/images/93581607.png",
            "http://qa-games.ru/astore/public/images/Frame_117.png"
          ],
          "title": "Футболка с 3D-стикерами",
          "subtitle": "Все варианты — внутри",
          "price": 1699,
          "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
          "colors": [
            "white",
            "black",
            "red",
            "green",
            "gray"
          ],
          "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
          ],
          "stickerNumbers": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
          ],
          "availability": true
        },
        {
          "id": 13,
          "preview": "http://qa-games.ru/astore/public/images/79520262.png",
          "images": [
            "http://qa-games.ru/astore/public/images/79520262.png",
            "http://qa-games.ru/astore/public/images/39648566.png",
            "http://qa-games.ru/astore/public/images/64444033.png",
            "http://qa-games.ru/astore/public/images/43246302.png",
            "http://qa-games.ru/astore/public/images/55576665.png",
            "http://qa-games.ru/astore/public/images/21845719.png",
            "http://qa-games.ru/astore/public/images/3_3d.png",
            "http://qa-games.ru/astore/public/images/98901313.png",
            "http://qa-games.ru/astore/public/images/55667992.png",
            "http://qa-games.ru/astore/public/images/93581607.png",
            "http://qa-games.ru/astore/public/images/Frame_119.png"
          ],
          "title": "Футболка оверсайз с 3D-стикерами",
          "subtitle": "Нажмите, чтобы выбрать стикер",
          "price": 1899,
          "description": "Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.",
          "colors": [
            "white",
            "black",
            "red",
            "gray"
          ],
          "sizes": [
            "S",
            "M",
            "L",
            "XL"
          ],
          "stickerNumbers": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
          ],
          "availability": true
        }
      ]
    }
  ],
}

export const ProductsAllTogether = CustomDesignProducts.groups
  .reduce((acc, item) => (item.products.concat(acc)), [] as IProduct[])
  .concat(Products)
  .sort((a, b) => a.id - b.id);