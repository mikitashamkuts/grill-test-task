import { takeLatest, put, call, select } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'

import GrillSortingAlgorithm from '@/utils/GrillSortingAlgorithm'
import { grillConfig as userGrillConfig } from '@/store'
import {
  setGrillConfigAction,
  setFitsGrillItemsAction,
  setOutOfGrillItemsAction,
  setGrillSizeAction,
} from '@/actions'
import { setGrillConfigWorker } from '.'

describe('Grill sagas:', () => {
  describe('setGrillConfigWorker:', () => {
    const data = {
      grill: {
        width: 400,
        height: 200,
        grillItems: [
          {
            width: 50,
            height: 30,
            count: 15,
            title: 'Steak',
          },
          {
            width: 140,
            height: 140,
            count: 2,
            title: 'Sausage',
          },
          {
            width: 130,
            height: 60,
            count: 4,
            title: 'Tomato',
          },
          {
            width: 20,
            height: 10,
            count: 37,
            title: 'Veal',
          },
        ],
      },
    }

    const grillConfig = {
      grill: { height: 1, width: 1 },
    }

    describe('successful case', () => {
      test('should execute successful case', async () => {
        await expectSaga(setGrillConfigWorker)
          .put(setGrillConfigAction(data))
          .put(
            setGrillSizeAction({
              height: grillConfig.grill.height,
              width: grillConfig.grill.width,
            })
          )
      })
    })
    describe('failed case', () => {})
  })
})
