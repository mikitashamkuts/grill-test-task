import React from 'react'

import GrillDashboardItem from '.'

describe('GrillDashboardItem:', () => {
  test('should match snapshot', () => {
    const component = shallow(<GrillDashboardItem />)
    expect(component).toMatchSnapshot()
  })
})
