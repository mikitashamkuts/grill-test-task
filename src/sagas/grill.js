import { takeLatest, put } from 'redux-saga/effects'

import {
  GET_USER_INPUT_FOR_GRILL_CONFIG,
  setGrillConfigAction,
} from '@/actions'

export function* setGrillConfigWorker({ payload }) {
  try {
    yield put(setGrillConfigAction(payload))
  } catch (error) {}
}

export function* grillWatcher() {
  yield takeLatest(GET_USER_INPUT_FOR_GRILL_CONFIG, setGrillConfigWorker)
}
