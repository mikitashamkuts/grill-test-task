import {
  SET_GRILL_CONFIG,
  setGrillConfigAction,
  GET_USER_INPUT_FOR_GRILL_CONFIG,
  getUserInputForGrillConfigAction,
  SET_FITS_GRILL_ITEMS,
  setFitsGrillItemsAction,
  SET_OUT_OF_GRILL_ITEMS,
  setOutOfGrillItemsAction,
  SET_GRILL_SIZE,
  setGrillSizeAction,
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
        "payload": Object {},
        "type": "GET_USER_INPUT_FOR_GRILL_CONFIG",
      }
    `)
    expect(getUserInputForGrillConfigAction()).toEqual({
      type: GET_USER_INPUT_FOR_GRILL_CONFIG,
    })
  })

  test('setFitsGrillItemsAction should return SET_FITS_GRILL_ITEMS', () => {
    expect(setFitsGrillItemsAction(payload)).toMatchInlineSnapshot(`
      Object {
        "payload": Object {},
        "type": "SET_FITS_GRILL_ITEMS",
      }
    `)
    expect(setFitsGrillItemsAction()).toEqual({
      type: SET_FITS_GRILL_ITEMS,
    })
  })

  test('setOutOfGrillItemsAction should return SET_OUT_OF_GRILL_ITEMS', () => {
    expect(setOutOfGrillItemsAction(payload)).toMatchInlineSnapshot(`
      Object {
        "payload": Object {},
        "type": "SET_OUT_OF_GRILL_ITEMS",
      }
    `)
    expect(setOutOfGrillItemsAction()).toEqual({
      type: SET_OUT_OF_GRILL_ITEMS,
    })
  })

  test('setGrillSizeAction should return SET_GRILL_SIZE', () => {
    expect(setGrillSizeAction(payload)).toMatchInlineSnapshot(`
      Object {
        "payload": Object {},
        "type": "SET_GRILL_SIZE",
      }
    `)
    expect(setGrillSizeAction()).toEqual({
      type: SET_GRILL_SIZE,
    })
  })
})
