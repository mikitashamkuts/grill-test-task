import React from 'react'

import GrillInput from '.'

describe('GrillInput:', () => {
  test('should match snapshot', () => {
    const component = shallow(<GrillInput />)
    expect(component).toMatchSnapshot()
  })
})
