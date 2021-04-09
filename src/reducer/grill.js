import { SET_GRILL_CONFIG } from '@/actions'

export const grillDefaultState = {
  grillConfig: null,
}

export function grillReducers(state = grillDefaultState, { type, payload }) {
  switch (type) {
    case SET_GRILL_CONFIG:
      return { ...state, grillConfig: payload }

    default:
      return state
  }
}
