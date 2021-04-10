import {
  SET_GRILL_CONFIG,
  SET_FITS_ITEMS,
  SET_OUT_OF_GRILL_ITEMS,
} from '@/actions'

export const grillDefaultState = {
  grillConfig: {},
  fitsItems: [],
  outOfGrillItems: [],
}

export function grillReducers(state = grillDefaultState, { type, payload }) {
  switch (type) {
    case SET_GRILL_CONFIG:
      return { ...state, grillConfig: payload }
    case SET_FITS_ITEMS:
      return { ...state, fitsItems: payload }
    case SET_OUT_OF_GRILL_ITEMS:
      return { ...state, outOfGrillItems: payload }

    default:
      return state
  }
}
