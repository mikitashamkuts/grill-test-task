import React from 'react'
import { Provider } from 'react-redux'

import ErrorBoundary from '@/hoc/ErrorBoundary'
import Router from '@/Router'
import store from '@/store'

function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <Router />
        </Provider>
      </ErrorBoundary>
    </React.StrictMode>
  )
}

export default App
