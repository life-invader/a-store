import { takeLatest, call, put } from 'redux-saga/effects';
import { productsActions } from './products-slice';
import { getAlfaProductsAction, getCustomProductsAction, getProductAction } from './actions';
import type { ICategory, IProduct } from '../../types/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { ApiRoutes } from '../../constants/api-routes';

function* getAlfaProductsSaga() {
  try {
    yield put(productsActions.setStatus({ isError: false, isLoading: true }));
    const response: Response = yield call(fetch, ApiRoutes.AlfaMade);
    const data: IProduct[] = yield call([response, response.json]);
    yield put(productsActions.loadProducts(data));
  } catch {
    yield put(productsActions.setStatus({ isError: true, isLoading: false }));
  }
}

function* getCustomProductsSaga() {
  try {
    yield put(productsActions.setStatus({ isError: false, isLoading: true }));
    const response: Response = yield call(fetch, ApiRoutes.CustomDesign);
    const data: ICategory[] = yield call([response, response.json]);
    yield put(productsActions.loadCategories(data));
  } catch {
    yield put(productsActions.setStatus({ isError: true, isLoading: false }));
  }
}

function* getProductSaga({ payload }: PayloadAction<string>) {
  try {
    yield put(productsActions.setStatus({ isError: false, isLoading: true }));
    const response: Response = yield call(fetch, ApiRoutes.Product(payload));
    const data: IProduct = yield call([response, response.json]);
    yield put(productsActions.loadCurrentProduct(data));
  } catch {
    yield put(productsActions.setStatus({ isError: true, isLoading: false }));
  }
}

export function* alfaProductsSagaWatcher() {
  yield takeLatest(getAlfaProductsAction.type, getAlfaProductsSaga);
}

export function* customProductsSagaWatcher() {
  yield takeLatest(getCustomProductsAction.type, getCustomProductsSaga);
}

export function* productSagaWatcher() {
  yield takeLatest(getProductAction.type, getProductSaga);
}
