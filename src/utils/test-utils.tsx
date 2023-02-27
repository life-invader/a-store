import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import productsSlice from '../store/products-slice/products-slice';
import rootSaga from '../store/root-saga';
import createSagaMiddleware from 'redux-saga';

export function createMockStore(preloadedState?: PreloadedState<typeof productsSlice>) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: productsSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);

  return store;
}
