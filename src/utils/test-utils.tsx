import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../store/products-slice/products-slice';
import rootSaga from '../store/root-saga';
import createSagaMiddleware from 'redux-saga';

export function createMockStore(preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: productsSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    preloadedState,
  });
  sagaMiddleware.run(rootSaga);

  return store;
}
