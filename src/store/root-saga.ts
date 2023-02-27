import { all, fork } from 'redux-saga/effects'
import { alfaProductsSagaWatcher, customProductsSagaWatcher, productSagaWatcher } from './products-slice/sagas';

function* rootSaga() {
  yield all([
    fork(alfaProductsSagaWatcher),
    fork(customProductsSagaWatcher),
    fork(productSagaWatcher),
  ]);
}

export default rootSaga;
