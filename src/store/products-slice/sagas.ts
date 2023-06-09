import { takeLatest, takeLeading, call, put, select } from 'redux-saga/effects';
import { productsActions } from './products-slice';
import { getAlfaProductsAction, getCustomProductsAction, getProductAction, postOrderAction } from './actions';
import { PayloadAction } from '@reduxjs/toolkit';
import { ApiRoutes } from '../../constants/api-routes';
import { selectCart } from './selectors';
import { OrderStatus } from '../../constants/common';
import type { ICartItem, ICategory, IProduct, IProductPreview } from '../../types/types';
import type { IFormValues } from '../../pages/checkout/type';

function* getAlfaProductsSaga() {
  try {
    yield put(productsActions.setStatus({ isError: false, isLoading: true }));
    const response: Response = yield call(fetch, ApiRoutes.AlfaMade);
    const data: IProductPreview[] = yield call([response, response.json]);
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

function* postOrderSaga({ payload }: PayloadAction<IFormValues>) {
  const cart: ICartItem[] = yield select(selectCart);
  const products = cart.map(({ item, itemTotal, options, quantity }) => {
    return {
      id: item.id,
      totalPrice: itemTotal,
      totalCount: quantity,
      ...options,
    }
  });

  try {
    const order = {
      ...payload,
      products,
    };

    yield put(productsActions.setOrderStatus(OrderStatus.Default));
    yield call(fetch, ApiRoutes.Order, { method: 'POST', body: JSON.stringify(order), headers: { 'Content-Type': 'Application/json' } });
    yield put(productsActions.setOrderStatus(OrderStatus.Success));
  } catch {
    yield put(productsActions.setOrderStatus(OrderStatus.Error));
  }
}

export function* postOrderSagaSagaWatcher() {
  yield takeLeading(postOrderAction.type, postOrderSaga);
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
