export const PromoData = [
  {
    id: 1,
    title: 'Сделано в Альфе',
    imgSrc: '/images/Frame_46.jpeg',
    pageLink: '/sdelano-v-alfe',
  },
  {
    id: 2,
    title: 'Свой дизайн',
    imgSrc: '/images/Frame_45.jpeg',
    pageLink: '/svoy-dizain',
  },
];

export const MINIMUM_SPINNER_DELAY = 1000;

export const ShipmentOptions = [
  {
    id: 0,
    title: 'Доставка по России',
    option: 'shipment-russia',
    cost: 350,
  },
  {
    id: 1,
    title: 'Курьером по Москве',
    option: 'shipment-moscow',
    cost: 300,
  },
  {
    id: 2,
    title: 'Самовывоз (пр-т Андропова, 18 корп. 3)',
    option: 'shipment-pickup',
    cost: 0,
  },
];

export const PaymentOptions = [
  { id: 0, title: 'Банковская карта', option: 'payment-card' },
  { id: 1, title: 'Промокод', option: 'payment-promo' }
];
