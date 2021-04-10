import React from 'react'

import OutOfGrillTableRow from '.'

describe('OutOfGrillTableRow:', () => {
  test('should match snapshot', () => {
    const component = shallow(<OutOfGrillTableRow />)
    expect(component).toMatchSnapshot()
  })
})
