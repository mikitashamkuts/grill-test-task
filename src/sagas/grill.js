import { takeEvery, call, put, select } from 'redux-saga/effects'
import { grillConfig } from '@/store'

import {
  GET_USER_INPUT_FOR_GRILL_CONFIG,
  setGrillConfigAction,
} from '@/actions'

export function* setGrillConfigWorker({ payload }) {
  try {
    yield put(setGrillConfigAction(payload))
    const test = yield select(grillConfig)
    yield call(console.log('value ', test))
  } catch (error) {}
}

export function* grillWatcher() {
  yield takeEvery(GET_USER_INPUT_FOR_GRILL_CONFIG, setGrillConfigWorker)
}
