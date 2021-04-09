import React from 'react'

import GrillPanel from '.'

describe('GrillPanel:', () => {
  test('should match snapshot', () => {
    const component = shallow(<GrillPanel />)
    expect(component).toMatchSnapshot()
  })
})
