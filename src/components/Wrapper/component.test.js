import React from 'react'

import Wrapper from '.'

describe('Wrapper:', () => {
  test('should match snapshot', () => {
    const component = shallow(<Wrapper />)
    expect(component).toMatchSnapshot()
  })
})
