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

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/sdelano-v-alfe',
        element: <MadeInAlfa />,
      },
      {
        path: '/svoy-dizain',
        element: <CustomDesign />,
      },
      {
        path: '/contact-us',
        element: <Contacts />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
