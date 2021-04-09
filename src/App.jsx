import React from 'react'

import ErrorBoundary from '@/hoc/ErrorBoundary'

function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary>test</ErrorBoundary>
    </React.StrictMode>
  )
}

export default App
