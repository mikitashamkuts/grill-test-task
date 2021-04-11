import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Paper, withStyles } from '@material-ui/core'

import GrillDashboardItem from '@/components/dashboards/GrillDashboardItem'

import styles from './styles'

function GrillDashboard({ classes }) {
  const defaultGrillConfig = {
    width: 400,
    height: 200,
  }

  const { grillConfig, fitsItems } = useSelector(state => state.grillReducers)

  return (
    <>
      <Paper
        className={classes.dashboard}
        style={{
          width: `${grillConfig?.grill?.width || defaultGrillConfig.width}px`,
          height: `${
            grillConfig?.grill?.height || defaultGrillConfig.height
          }px`,
        }}
      >
        {fitsItems.map(
          ({ title, height, width, positionX, positionY }, index) => {
            return (
              <GrillDashboardItem
                key={title + index}
                title={title}
                height={height}
                width={width}
                positionX={positionX}
                positionY={positionY}
              />
            )
          }
        )}
      </Paper>
    </>
  )
}

GrillDashboard.propTypes = {}
GrillDashboard.defaultProps = {}

export default withStyles(styles, { withTheme: true })(GrillDashboard)
