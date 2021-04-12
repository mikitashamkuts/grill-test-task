import React from 'react'

import MainMenu from '.'

describe('MainMenu:', () => {
  test('should match snapshot', () => {
    const component = shallow(
      <MainMenu topPanel={'test'} routedComponents={'test'} />
    )
    expect(component).toMatchSnapshot()
  })
})
