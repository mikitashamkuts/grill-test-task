import {
  SET_GRILL_CONFIG,
  SET_FITS_GRILL_ITEMS,
  SET_OUT_OF_GRILL_ITEMS,
  SET_GRILL_SIZE,
} from '@/actions'

export const grillDefaultState = {
  grillConfig: {},
  fitsGrillItems: [],
  outOfGrillItems: [],
  grillSize: { height: null, width: null },
}

export function grillReducers(state = grillDefaultState, { type, payload }) {
  switch (type) {
    case SET_GRILL_CONFIG:
      return { ...state, grillConfig: payload }
    case SET_FITS_GRILL_ITEMS:
      return { ...state, fitsGrillItems: payload }
    case SET_OUT_OF_GRILL_ITEMS:
      return { ...state, outOfGrillItems: payload }
    case SET_GRILL_SIZE:
      return { ...state, grillSize: payload }

    default:
      return state
  }
}
