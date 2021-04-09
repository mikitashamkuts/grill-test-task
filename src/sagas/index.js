import { all } from 'redux-saga/effects'

import { grillWatcher } from './grill'

function* rootSaga() {
  yield all([grillWatcher()])
}

export * from './grill'

export default rootSaga
