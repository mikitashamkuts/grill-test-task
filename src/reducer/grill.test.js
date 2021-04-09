import { grillReducers, grillDefaultState } from '.'
import { setGrillConfigAction } from '@/actions'

describe('Grill reducer:', () => {
  test('should return initial state by default', () => {
    expect(grillReducers(grillDefaultState, {})).toMatchInlineSnapshot(`
      Object {
        "grillConfig": null,
      }
    `)
    expect(grillReducers(grillDefaultState, {})).toEqual(grillDefaultState)
  })

  test('should handle setGrillConfigAction', () => {
    const payload = 'test'
    expect(grillReducers(grillDefaultState, setGrillConfigAction(payload)))
      .toMatchInlineSnapshot(`
      Object {
        "grillConfig": "test",
      }
    `)
    const store = grillReducers(
      grillDefaultState,
      setGrillConfigAction(payload)
    )
    expect(store.grillConfig).toEqual(payload)
  })
})
