import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MadeInAlfa from './made-in-alfa';
import { AlfaMadeProducts } from '../../mocks/api-made-in-alfa';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Проверка работы компонента <MadeInAlfa />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Проверяет рендер компонента <MadeInAlfa />', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(AlfaMadeProducts),
      } as Response),
    );

    jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <MadeInAlfa />
      </Provider>,
      { wrapper: MemoryRouter },
    );

    const title = screen.getByText('Сделано в Альфе');
    expect(title).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalled();
  });

  test('Проверяет обработку ошибок в компоненте <MadeInAlfa />', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      throw new Error();
    });

    jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <MadeInAlfa />
      </Provider>,
      { wrapper: MemoryRouter },
    );

    const title = screen.getByText('Что-то пошло не так(((');
    expect(title).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalled();
  });
});
