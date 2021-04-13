import React from 'react'

import HomePage from '.'

describe('HomePage:', () => {
  test('should match snapshot', () => {
    const component = shallow(<HomePage />)
    expect(component).toMatchSnapshot()
  })
})
