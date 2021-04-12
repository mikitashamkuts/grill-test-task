import React from 'react'
import PropTypes from 'prop-types'

import { Grid, withStyles } from '@material-ui/core'

import GrillInput from '@/components/controls/GrillInput'
import OutOfGrillTable from '@/components/tables/OutOfGrillTable'
import GrillDashboard from '@/components/dashboards/GrillDashboard'

import styles from './styles'

function Grill({ classes }) {
  return (
    <>
      <Grid data-test="screen" container spacing={3}>
        <Grid item xs={8}>
          <Grid>
            <GrillDashboard />
          </Grid>
          <Grid className={classes.test}>
            <GrillInput />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <OutOfGrillTable />
        </Grid>
      </Grid>
    </>
  )
}

Grill.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
}
Grill.defaultProps = {}

export default withStyles(styles, { withTheme: true })(Grill)
