import { put } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'

import { setGrillConfigWorker } from '.'

import {
  getUserInputForGrillConfigAction,
  setGrillConfigAction,
} from '@/actions'

describe('Grill sagas:', () => {
  describe('setGrillConfigWorker:', () => {
    const payload = 'test'
    const saga = cloneableGenerator(setGrillConfigWorker)(
      getUserInputForGrillConfigAction(payload)
    )

    describe('successful case', () => {
      test('should execute successful case', () => {
        expect(saga.next().value).toEqual(put(setGrillConfigAction(payload)))
      })
    })
    describe('failed case', () => {})
  })
})
