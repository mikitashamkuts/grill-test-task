export const GET_USER_INPUT_FOR_GRILL_CONFIG = 'GET_USER_INPUT_FOR_GRILL_CONFIG'
export const SET_GRILL_CONFIG = 'SET_GRILL_CONFIG'

export function setGrillConfigAction(value) {
  return { type: SET_GRILL_CONFIG, payload: value }
}

export function getUserInputForGrillConfigAction(value) {
  return { type: GET_USER_INPUT_FOR_GRILL_CONFIG, payload: value }
}
