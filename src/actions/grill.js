export const SET_GRILL_CONFIG = 'SET_GRILL_CONFIG'
export const GET_USER_INPUT_FOR_GRILL_CONFIG = 'GET_USER_INPUT_FOR_GRILL_CONFIG'
export const SET_FITS_ITEMS = 'SET_FITS_ITEMS'
export const SET_OUT_OF_GRILL_ITEMS = 'SET_OUT_OF_GRILL_ITEMS'

export function setGrillConfigAction(value) {
  return { type: SET_GRILL_CONFIG, payload: value }
}

export function getUserInputForGrillConfigAction(value) {
  return { type: GET_USER_INPUT_FOR_GRILL_CONFIG, payload: value }
}

export function setFitsItemsAction(value) {
  return { type: SET_FITS_ITEMS, payload: value }
}

export function setOutOfGrillItemsAction(value) {
  return { type: SET_OUT_OF_GRILL_ITEMS, payload: value }
}
