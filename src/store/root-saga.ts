import { all, fork } from 'redux-saga/effects'
import { alfaProductsSagaWatcher, customProductsSagaWatcher, postOrderSagaSagaWatcher, productSagaWatcher } from './products-slice/sagas';

function* rootSaga() {
  yield all([
    fork(alfaProductsSagaWatcher),
    fork(customProductsSagaWatcher),
    fork(productSagaWatcher),
    fork(postOrderSagaSagaWatcher),
  ]);
}

export default rootSaga;
