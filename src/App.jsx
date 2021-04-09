import React from 'react'

import ErrorBoundary from '@/hoc/ErrorBoundary'
import Router from '@/Router'

function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </React.StrictMode>
  )
}

export default App
