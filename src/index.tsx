import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/app/app';
import Contacts from './pages/contacts/contacts';
import CustomDesign from './pages/custom-design/custom-design';
import ErrorPage from './pages/error-page/error-page';
import MadeInAlfa from './pages/made-in-alfa/made-in-alfa';
import MainPage from './pages/main-page/main-page';
import Cart from './pages/cart/cart';
import Product from './pages/product/product';
import { Provider } from 'react-redux';
import { AppRoutes } from './constants/routes';
import { store } from './store/store';

import './index.css';

const router = createBrowserRouter([
  {
    path: AppRoutes.Main,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: AppRoutes.MadeInAlfa,
        element: <MadeInAlfa />,
      },
      {
        path: AppRoutes.CustomDesign,
        element: <CustomDesign />,
      },
      {
        path: AppRoutes.Product(),
        element: <Product />,
      },
      {
        path: AppRoutes.Contacts,
        element: <Contacts />,
      },
      {
        path: AppRoutes.Cart,
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
