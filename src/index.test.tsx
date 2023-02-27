/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './components/app/app';
import { AppRoutes } from './constants/routes';
import MainPage from './pages/main-page/main-page';
import MadeInAlfa from './pages/made-in-alfa/made-in-alfa';
import CustomDesign from './pages/custom-design/custom-design';
import Contacts from './pages/contacts/contacts';
import Cart from './pages/cart/cart';
import Product from './pages/product/product';

describe('Тестирование роутинга в приложении', () => {
  beforeAll(() => {
    global.matchMedia =
      global.matchMedia ||
      function () {
        return {
          matches: true,
          media: 'query',
          onchange: null,
          addListener: jest.fn(), // deprecated
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        };
      };
  });

  test('Должен отрендерить компонент главной страницы <MainPage />', () => {
    render(
      <Routes>
        <Route path={AppRoutes.Main} element={<App />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoutes.MadeInAlfa} element={<MadeInAlfa />} />
          <Route path={AppRoutes.CustomDesign} element={<CustomDesign />} />
          <Route path={AppRoutes.Contacts} element={<Contacts />} />
          <Route path={AppRoutes.Cart} element={<Cart />} />
        </Route>
      </Routes>,
      { wrapper: MemoryRouter },
    );

    expect(screen.getByText(/сделано в альфе/i)).toBeInTheDocument();
  });

  test('Должен отрендерить компонент страницы "Сделано в Альфе" <MadeInAlfa />', () => {
    render(
      <Routes>
        <Route path={AppRoutes.Main} element={<App />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoutes.MadeInAlfa} element={<MadeInAlfa />} />
          <Route path={AppRoutes.CustomDesign} element={<CustomDesign />} />
          <Route path={AppRoutes.Contacts} element={<Contacts />} />
          <Route path={AppRoutes.Cart} element={<Cart />} />
        </Route>
      </Routes>,
      { wrapper: MemoryRouter },
    );

    fireEvent.click(screen.getByText(/сделано в альфе/i));
    expect(
      screen.getByText(/Хотим каждую из этих вещей! Себе, родным и друзьям/i),
    ).toBeInTheDocument();
  });

  test('Должен отрендерить компонент страницы "Свой дизайн" <CustomDesign />', () => {
    render(
      <Routes>
        <Route path={AppRoutes.Main} element={<App />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoutes.MadeInAlfa} element={<MadeInAlfa />} />
          <Route path={AppRoutes.CustomDesign} element={<CustomDesign />} />
          <Route path={AppRoutes.Contacts} element={<Contacts />} />
          <Route path={AppRoutes.Cart} element={<Cart />} />
        </Route>
      </Routes>,
      { wrapper: MemoryRouter },
    );

    fireEvent.click(screen.getByText(/свой дизайн/i));
    expect(
      screen.getByText(
        /Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото/i,
      ),
    ).toBeInTheDocument();
  });

  test('Должен отрендерить компонент страницы "Контакты" <Contacts />', async () => {
    render(
      <Routes>
        <Route path={AppRoutes.Main} element={<App />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoutes.MadeInAlfa} element={<MadeInAlfa />} />
          <Route path={AppRoutes.CustomDesign} element={<CustomDesign />} />
          <Route path={AppRoutes.Contacts} element={<Contacts />} />
          <Route path={AppRoutes.Cart} element={<Cart />} />
        </Route>
      </Routes>,
      { wrapper: MemoryRouter },
    );

    fireEvent.click(screen.getByRole('button', { name: /меню/i }));
    fireEvent.click(screen.getByRole('link', { name: /контакты/i }));

    await waitForElementToBeRemoved(screen.queryByRole('link', { name: /контакты/i }));
    expect(
      screen.getByText(/Принимаем к оплате карты Visa, Mastercard, МИР./i),
    ).toBeInTheDocument();
  });

  test('Должен отрендерить компонент страницы "Корзины" <Cart />', async () => {
    render(
      <Routes>
        <Route path={AppRoutes.Main} element={<App />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoutes.MadeInAlfa} element={<MadeInAlfa />} />
          <Route path={AppRoutes.CustomDesign} element={<CustomDesign />} />
          <Route path={AppRoutes.Contacts} element={<Contacts />} />
          <Route path={AppRoutes.Cart} element={<Cart />} />
        </Route>
      </Routes>,
      { wrapper: MemoryRouter },
    );

    fireEvent.click(screen.getByTestId('cart-button'));
    expect(screen.getByText(/ФИО/i)).toBeInTheDocument();
  });

  test('Должен отрендерить компонент страницы "Товара" <Product />', async () => {
    render(
      <Routes>
        <Route path={AppRoutes.Main} element={<App />}>
          <Route index element={<MadeInAlfa />} />
          <Route path={AppRoutes.Product()} element={<Product />} />
        </Route>
      </Routes>,
      { wrapper: MemoryRouter },
    );

    const productCards = screen.getAllByTestId('product-card-test');
    fireEvent.click(productCards[0]);
    expect(screen.getByTestId('product-test')).toBeInTheDocument();
  });
});
