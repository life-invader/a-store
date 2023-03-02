import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/app/app';
import Contacts from './pages/contacts/contacts';
import CustomDesign from './pages/custom-design/custom-design';
import Component404 from './pages/component-404/component-404';
import MadeInAlfa from './pages/made-in-alfa/made-in-alfa';
import MainPage from './pages/main-page/main-page';
import Cart from './pages/cart/cart';
import Product from './pages/product/product';
import { Provider } from 'react-redux';
import { AppRoutes } from './constants/app-routes';
import { store } from './store/store';
import ErrorBoundary from './components/error-boundary/error-boundary';

import './index.css';

const router = createBrowserRouter([
  {
    path: AppRoutes.Main,
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    errorElement: <Component404 />,
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
