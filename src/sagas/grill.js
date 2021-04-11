import { takeLatest, put, call, select } from 'redux-saga/effects'

import GrillSortingAlgorithm from '@/utils/GrillSortingAlgorithm'
import { grillConfig as userGrillConfig } from '@/store'

import {
  GET_USER_INPUT_FOR_GRILL_CONFIG,
  setGrillConfigAction,
  setFitsGrillItemsAction,
  setOutOfGrillItemsAction,
  setGrillSizeAction,
} from '@/actions'

// this saga contains all the logic of the core feature

export function* setGrillConfigWorker({ payload }) {
  try {
    yield put(setGrillConfigAction(JSON.parse(payload)))
    const grillConfig = yield select(userGrillConfig)

    yield put(
      setGrillSizeAction({
        height: grillConfig.grill.height,
        width: grillConfig.grill.width,
      })
    )

    const packer = yield new GrillSortingAlgorithm(
      grillConfig.grill.width,
      grillConfig.grill.height
    )
    const parsedItems = yield call(
      packer.parsItems,
      grillConfig.grill.grillItems
    )
    yield packer.fit(parsedItems)
    const fitsGrillItems = yield []
    const outOfGrillItems = yield []
    for (let n = 0; n < parsedItems.length; n++) {
      const item = parsedItems[n]
      if (item.fit) {
        fitsGrillItems.push({
          positionX: item.fit.x,
          positionY: item.fit.y,
          width: item.width,
          height: item.height,
          title: item.title,
        })
      } else {
        outOfGrillItems.push({
          width: item.width,
          height: item.height,
          title: item.title,
        })
      }
    }
    yield put(setFitsGrillItemsAction(fitsGrillItems))
    yield put(setOutOfGrillItemsAction(outOfGrillItems))
  } catch (error) {}
}

export function* grillWatcher() {
  yield takeLatest(GET_USER_INPUT_FOR_GRILL_CONFIG, setGrillConfigWorker)
}
