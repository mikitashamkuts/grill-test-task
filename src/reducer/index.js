import { combineReducers } from 'redux'

import { grillReducers } from './grill'

const rootReducer = combineReducers({
  grillReducers,
})

export * from './grill'

export default rootReducer
