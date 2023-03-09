export const AppRoutes = {
  Main: '/',
  MadeInAlfa: '/sdelano-v-alfe',
  CustomDesign: '/svoy-dizain',
  Product: (id: number | string = ':id') => `/product/${id}`,
  Contacts: '/contact-us',
  Checkout: '#checkout',
}