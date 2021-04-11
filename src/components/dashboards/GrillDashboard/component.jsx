import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Box, Paper, withStyles } from '@material-ui/core'

import styles from './styles'
import GrillDashboardItem from '@/components/dashboards/GrillDashboardItem'

function GrillDashboard() {
  const defaultGrillConfig = {
    width: 400,
    height: 200,
  }

  const { grillConfig, fitsItems } = useSelector(state => state.grillReducers)

  return (
    <>
      <Paper
        style={{
          position: 'relative',
          width: `${grillConfig?.grill?.width || defaultGrillConfig.width}px`,
          height: `${
            grillConfig?.grill?.height || defaultGrillConfig.height
          }px`,
        }}
        variant="outlined"
      >
        {fitsItems.map(({ title, height, width, positionX, positionY }) => {
          return (
            <GrillDashboardItem
              title={title}
              height={height}
              width={width}
              positionX={positionX}
              positionY={positionY}
            />
          )
        })}
      </Paper>
    </>
  )
}

export default withStyles(styles, { withTheme: true })(GrillDashboard)
