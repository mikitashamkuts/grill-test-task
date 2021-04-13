import React from 'react'

import Grill from '.'

describe('Grill layout:', () => {
  test('should match snapshot', () => {
    const component = shallow(<Grill />)
    expect(component).toMatchSnapshot()
  })
})
