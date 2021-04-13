import React from 'react'

import GrillDashboard from '.'

describe('GrillDashboard:', () => {
  test('should match snapshot', () => {
    const component = shallow(<GrillDashboard />)
    expect(component).toMatchSnapshot()
  })
})
