import {
  SET_GRILL_CONFIG,
  setGrillConfigAction,
  GET_USER_INPUT_FOR_GRILL_CONFIG,
  getUserInputForGrillConfigAction,
} from '.'

describe('Grill actions:', () => {
  const payload = {}
  test('setGrillConfigAction should return SET_GRILL_CONFIG with payload', () => {
    expect(setGrillConfigAction(payload)).toMatchInlineSnapshot(`
      Object {
        "payload": Object {},
        "type": "SET_GRILL_CONFIG",
      }
    `)
    expect(setGrillConfigAction(payload)).toEqual({
      type: SET_GRILL_CONFIG,
      payload: payload,
    })
  })
  test('getUserInputForGrillConfigAction should return GET_USER_INPUT_FOR_GRILL_CONFIG', () => {
    expect(getUserInputForGrillConfigAction(payload)).toMatchInlineSnapshot(`
      Object {
        "type": "GET_USER_INPUT_FOR_GRILL_CONFIG",
      }
    `)
    expect(getUserInputForGrillConfigAction()).toEqual({
      type: GET_USER_INPUT_FOR_GRILL_CONFIG,
    })
  })
})
