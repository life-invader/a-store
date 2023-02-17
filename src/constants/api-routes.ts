const Api = 'http://qa-games.ru/astore/';

export const ApiRoutes = {
  AlfaMade: `${Api}/made-in-alfa`,
  CustomDesign: `${Api}/your-design`,
  Product: (id: string | number) => `${Api}/product/${id}`,
  Order: `${Api}/create-order`,
}