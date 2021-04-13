import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import HomePage from '@/components/pages/HomePage'
import { pageRoutes } from '@/routes'

function Router() {
  const { HOME_PAGE } = pageRoutes

  return (
    <ReachRouter>
      <HomePage path={HOME_PAGE} />
    </ReachRouter>
  )
}

export default Router
