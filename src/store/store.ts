import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import productsSlice from './products-slice/products-slice';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: productsSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);
