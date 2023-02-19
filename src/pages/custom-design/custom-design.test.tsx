import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CustomDesign from './custom-design';
import { MemoryRouter } from 'react-router-dom';
import { CustomDesignProducts } from '../../mocks/api-your-design';
import { Provider } from 'react-redux';
import { createMockStore } from '../../utils/test-utils';

describe('Проверка работы компонента <CustomDesign />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Проверяет рендер компонента <CustomDesign />', async () => {
    const store = createMockStore();

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(CustomDesignProducts),
      } as Response),
    );
    jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <CustomDesign />
      </Provider>,
      { wrapper: MemoryRouter },
    );

    const title = screen.getByText('Свой дизайн');
    const screenGroups = await screen.findAllByTestId('custom-design-group');
    expect(title).toBeInTheDocument();
    expect(screenGroups).toHaveLength(CustomDesignProducts.length);
    expect(store.dispatch).toHaveBeenCalled();
  });

  test('Проверяет обработку ошибок в компоненте <CustomDesign />', async () => {
    const store = createMockStore();

    jest.spyOn(global, 'fetch').mockImplementation(() => {
      throw new Error();
    });
    jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <CustomDesign />
      </Provider>,
      { wrapper: MemoryRouter },
    );

    const title = screen.getByText('Что-то пошло не так(((');
    expect(title).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalled();
  });
});
