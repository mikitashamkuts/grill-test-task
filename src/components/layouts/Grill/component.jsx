import React from 'react'
import PropTypes from 'prop-types'

import { Paper } from '@material-ui/core'

import GrillInput from '@/components/controls/GrillInput'
import OutOfGrillTable from '@/components/tables/OutOfGrillTable'
import GrillDashboard from '@/components/dashboards/GrillDashboard'

function Grill() {
  return (
    <>
      <GrillDashboard />
      <OutOfGrillTable />
      <GrillInput />
    </>
  )
}

Grill.propTypes = {}

Grill.defaultProps = {}

export default Grill
