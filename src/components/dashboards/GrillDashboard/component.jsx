import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Paper, withStyles } from '@material-ui/core'

import GrillDashboardItem from '@/components/dashboards/GrillDashboardItem'
import { calculateHeightInProportions } from '@/utils/calculators/'

import styles from './styles'

function GrillDashboard({ classes }) {
  const { grillSize, fitsGrillItems } = useSelector(
    state => state.grillReducers
  )
  const [grillDisplayHeight, setGrillDisplayHeight] = useState(null)
  const ref = useRef(null)

  // calculate proportion of the grill for the display
  const defaultGrillSize = {
    with: 400,
    height: 100,
  }

  useEffect(() => {
    setGrillDisplayHeight(
      calculateHeightInProportions(
        grillSize.width || defaultGrillSize.with,
        grillSize.height || defaultGrillSize.height,
        Math.floor(ref.current.offsetWidth)
      )
    )
  }, [ref.current, grillSize])

  const grillDisplayConfig = {
    width: '100%', // width of the grill always 100% of the block
    height: grillDisplayHeight, // value calculated in proportion
  }

  return (
    <>
      <Paper
        className={classes.dashboard}
        ref={ref}
        style={{
          width: grillDisplayConfig.width,
          height: grillDisplayConfig.height,
        }}
        data-test="screen"
      >
        {fitsGrillItems.map(
          ({ title, height, width, positionX, positionY }, index) => {
            return (
              <GrillDashboardItem
                key={title + index}
                title={title}
                height={height}
                width={width}
                positionX={positionX}
                positionY={positionY}
                widthOfContainer={Math.floor(ref.current.offsetWidth)}
              />
            )
          }
        )}
      </Paper>
    </>
  )
}

GrillDashboard.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
}
GrillDashboard.defaultProps = {}

export default withStyles(styles, { withTheme: true })(GrillDashboard)
