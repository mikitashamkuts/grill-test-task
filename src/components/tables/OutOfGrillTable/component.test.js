import React from 'react'

import OutOfGrillPanel from '.'

describe('OutOfGrillPanel:', () => {
  test('should match snapshot', () => {
    const component = shallow(<OutOfGrillPanel />)
    expect(component).toMatchSnapshot()
  })
})
