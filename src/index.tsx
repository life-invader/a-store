import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/app/app';
import Contacts from './pages/contacts/contacts';
import CustomDesign from './pages/custom-design/custom-design';
import Component404 from './pages/component-404/component-404';
import MadeInAlfa from './pages/made-in-alfa/made-in-alfa';
import MainPage from './pages/main-page/main-page';
import Product from './pages/product/product';
import { Provider } from 'react-redux';
import { AppRoutes } from './constants/app-routes';
import { persistor, store } from './store/store';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { PersistGate } from 'redux-persist/integration/react';

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
