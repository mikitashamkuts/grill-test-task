import React from 'react'

import MainWrapper from '.'

describe('MainWrapper:', () => {
  test('should match snapshot', () => {
    const component = shallow(<MainWrapper />)
    expect(component).toMatchSnapshot()
  })
})
