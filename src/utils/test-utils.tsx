import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import productsSlice from '../store/products-slice/products-slice';
import { render, RenderOptions } from '@testing-library/react';
import type { StateType } from '../store/type';

const rootReducer = combineReducers({
  products: productsSlice,
});

const setupStore = (preloadedState?: PreloadedState<RootStateType>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

type RootStateType = ReturnType<typeof rootReducer>;
type AppStoreType = ReturnType<typeof setupStore>;
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootStateType>;
  store?: AppStoreType;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({ reducer: { products: productsSlice }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
