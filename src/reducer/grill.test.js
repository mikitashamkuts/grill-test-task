import { grillReducers, grillDefaultState } from '.'
import {
  setGrillConfigAction,
  setFitsGrillItemsAction,
  setOutOfGrillItemsAction,
  setGrillSizeAction,
} from '@/actions'

describe('Grill reducer:', () => {
  test('should return initial state by default', () => {
    expect(grillReducers(grillDefaultState, {})).toMatchInlineSnapshot(`
      Object {
        "fitsGrillItems": Array [],
        "grillConfig": Object {},
        "grillSize": Object {
          "height": null,
          "width": null,
        },
        "outOfGrillItems": Array [],
      }
    `)
    expect(grillReducers(grillDefaultState, {})).toEqual(grillDefaultState)
  })

  test('should handle setGrillConfigAction', () => {
    const payload = 'test'
    expect(grillReducers(grillDefaultState, setGrillConfigAction(payload)))
      .toMatchInlineSnapshot(`
      Object {
        "fitsGrillItems": Array [],
        "grillConfig": "test",
        "grillSize": Object {
          "height": null,
          "width": null,
        },
        "outOfGrillItems": Array [],
      }
    `)
    const store = grillReducers(
      grillDefaultState,
      setGrillConfigAction(payload)
    )
    expect(store.grillConfig).toEqual(payload)
  })

  test('should handle setFitsGrillItemsAction', () => {
    const payload = ['test']
    expect(grillReducers(grillDefaultState, setFitsGrillItemsAction(payload)))
      .toMatchInlineSnapshot(`
      Object {
        "fitsGrillItems": Array [
          "test",
        ],
        "grillConfig": Object {},
        "grillSize": Object {
          "height": null,
          "width": null,
        },
        "outOfGrillItems": Array [],
      }
    `)
    const store = grillReducers(
      grillDefaultState,
      setGrillConfigAction(payload)
    )
    expect(store.fitsGrillItems).toEqual(payload)
  })

  test('should handle setOutOfGrillItemsAction', () => {
    const payload = ['test']
    expect(grillReducers(grillDefaultState, setOutOfGrillItemsAction(payload)))
      .toMatchInlineSnapshot(`
      Object {
        "fitsGrillItems": Array [],
        "grillConfig": Object {},
        "grillSize": Object {
          "height": null,
          "width": null,
        },
        "outOfGrillItems": Array [
          "test",
        ],
      }
    `)
    const store = grillReducers(
      grillDefaultState,
      setOutOfGrillItemsAction(payload)
    )
    expect(store.outOfGrillItems).toEqual(payload)
  })

  test('should handle setGrillSizeAction', () => {
    const payload = ['test']
    expect(grillReducers(grillDefaultState, setGrillSizeAction(payload)))
      .toMatchInlineSnapshot(`
      Object {
        "fitsGrillItems": Array [],
        "grillConfig": Object {},
        "grillSize": Array [
          "test",
        ],
        "outOfGrillItems": Array [],
      }
    `)
    const store = grillReducers(grillDefaultState, setGrillSizeAction(payload))
    expect(store.grillSize).toEqual(payload)
  })
})
