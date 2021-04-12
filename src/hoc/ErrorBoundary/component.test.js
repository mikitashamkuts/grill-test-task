import React from 'react'

import ErrorBoundary from '.'

describe('ErrorBoundary:', () => {
  test('should match snapshot', () => {
    const component = shallow(<ErrorBoundary />)
    expect(component).toMatchSnapshot()
  })
})
