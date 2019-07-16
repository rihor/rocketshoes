import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

// qual action ouvir e qual método disparar
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
