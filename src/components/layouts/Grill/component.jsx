import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid } from '@material-ui/core'

import GrillInput from '@/components/controls/GrillInput'
import OutOfGrillTable from '@/components/tables/OutOfGrillTable'
import GrillDashboard from '@/components/dashboards/GrillDashboard'

function Grill() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <GrillDashboard />
        </Grid>
        <Grid item xs={4}>
          <OutOfGrillTable />
        </Grid>
        <Grid item xs={8}>
          <GrillInput />
        </Grid>
      </Grid>
    </>
  )
}

Grill.propTypes = {}

Grill.defaultProps = {}

export default Grill
