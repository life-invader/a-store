import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './components/app/app';
import { AppRoutes } from './constants/app-routes';
import MainPage from './pages/main-page/main-page';
import MadeInAlfa from './pages/made-in-alfa/made-in-alfa';
import CustomDesign from './pages/custom-design/custom-design';
import Contacts from './pages/contacts/contacts';
import Product from './pages/product/product';
import { createMockStore } from './utils/test-utils';
import { Provider } from 'react-redux';
import { CustomDesignProductsMock } from './mocks/api-your-design';
import { AlfaMadeProductsMock } from './mocks/api-made-in-alfa';

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

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Должен отрендерить компонент главной страницы <MainPage />', () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <Routes>
          <Route path={AppRoutes.Main} element={<App />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoutes.MadeInAlfa} element={<MadeInAlfa />} />
            <Route path={AppRoutes.CustomDesign} element={<CustomDesign />} />
            <Route path={AppRoutes.Contacts} element={<Contacts />} />
          </Route>
        </Routes>
      </Provider>,
      { wrapper: MemoryRouter },
    );

    expect(screen.getByText(/сделано в альфе/i)).toBeInTheDocument();
  });

  test('Должен отрендерить компонент страницы "Сделано в Альфе" <MadeInAlfa />', () => {
    const store = createMockStore();

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(AlfaMadeProductsMock),
      } as Response),
    );

    render(
      <Provider store={store}>
        <Routes>
          <Route path={AppRoutes.Main} element={<App />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoutes.MadeInAlfa} element={<MadeInAlfa />} />
            <Route path={AppRoutes.CustomDesign} element={<CustomDesign />} />
            <Route path={AppRoutes.Contacts} element={<Contacts />} />
          </Route>
        </Routes>
      </Provider>,
      { wrapper: MemoryRouter },
    );

    fireEvent.click(screen.getByText(/сделано в альфе/i));
    expect(
      screen.getByText(/Хотим каждую из этих вещей! Себе, родным и друзьям/i),
    ).toBeInTheDocument();
  });

  test('Должен отрендерить компонент страницы "Свой дизайн" <CustomDesign />', () => {
    const store = createMockStore();

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(CustomDesignProductsMock),
      } as Response),
    );

    render(
      <Provider store={store}>
        <Routes>
          <Route path={AppRoutes.Main} element={<App />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoutes.MadeInAlfa} element={<MadeInAlfa />} />
            <Route path={AppRoutes.CustomDesign} element={<CustomDesign />} />
            <Route path={AppRoutes.Contacts} element={<Contacts />} />
          </Route>
        </Routes>
      </Provider>,
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
    const store = createMockStore();

    render(
      <Provider store={store}>
        <Routes>
          <Route path={AppRoutes.Main} element={<App />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoutes.MadeInAlfa} element={<MadeInAlfa />} />
            <Route path={AppRoutes.CustomDesign} element={<CustomDesign />} />
            <Route path={AppRoutes.Contacts} element={<Contacts />} />
          </Route>
        </Routes>
      </Provider>,
      { wrapper: MemoryRouter },
    );

    fireEvent.click(screen.getByRole('button', { name: /меню/i }));
    fireEvent.click(screen.getByRole('link', { name: /контакты/i }));

    await waitForElementToBeRemoved(screen.queryByRole('link', { name: /контакты/i }));
    expect(
      screen.getByText(/Принимаем к оплате карты Visa, Mastercard, МИР./i),
    ).toBeInTheDocument();
  });

  test('Должен отрендерить компонент страницы "Товара" <Product />', async () => {
    const store = createMockStore();

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(AlfaMadeProductsMock),
      } as Response),
    );

    render(
      <Provider store={store}>
        <Routes>
          <Route path={AppRoutes.Main} element={<App />}>
            <Route index element={<MadeInAlfa />} />
            <Route path={AppRoutes.Product()} element={<Product />} />
          </Route>
        </Routes>
      </Provider>,
      { wrapper: MemoryRouter },
    );

    // Ждем пока пропадет спиннер
    await new Promise((resolve) => {
      setTimeout(() => resolve(''), 1000);
    });

    const productCards = await screen.findAllByTestId('product-card-test');
    userEvent.click(productCards[0]);
    await waitForElementToBeRemoved(productCards[0]);
    expect(screen.getByTestId('product-test')).toBeInTheDocument();
  });
});
