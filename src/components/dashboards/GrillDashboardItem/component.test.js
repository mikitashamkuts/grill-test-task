import React from 'react'

import GrillDashboardItem from '.'

describe('GrillDashboardItem:', () => {
  test('should match snapshot', () => {
    const component = shallow(
      <GrillDashboardItem
        title={'test'}
        height={1}
        width={1}
        positionX={1}
        positionY={1}
        widthOfContainer={1}
      />
    )
    expect(component).toMatchSnapshot()
  })
})
