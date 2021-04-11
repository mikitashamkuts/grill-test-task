import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Popover, Typography, withStyles, Card } from '@material-ui/core'

import {
  calculateItemProportions,
  calculateItemPositionInProportion,
} from '@/utils/calculators'

import styles from './styles'

function GrillDashboardItem({
  classes,
  title,
  height,
  width,
  positionY,
  positionX,
  widthOfContainer,
}) {
  const [anchorEl, setAnchorEl] = useState(null)
  const grillSize = useSelector(state => state.grillReducers.grillSize)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : null

  return (
    <>
      <Card
        onClick={handleClick}
        className={classes.item}
        style={{
          height: `${calculateItemProportions(
            height,
            widthOfContainer,
            grillSize.width
          )}px`,
          width: `${calculateItemProportions(
            width,
            widthOfContainer,
            grillSize.width
          )}px`,
          top: `${calculateItemPositionInProportion(
            positionY,
            widthOfContainer,
            grillSize.width
          )}px`,
          left: `${calculateItemPositionInProportion(
            positionX,
            widthOfContainer,
            grillSize.width
          )}px`,
        }}
        aria-describedby={id}
        variant="outlined"
        color="secondary"
      />
      <Popover
        onClose={handleClose}
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.popover}>{title}</Typography>
      </Popover>
    </>
  )
}

GrillDashboardItem.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  positionY: PropTypes.number,
  positionX: PropTypes.number,
  widthOfContainer: PropTypes.number.isRequired,
}
GrillDashboardItem.defaultProps = {
  title: null,
  width: null,
  height: null,
  positionY: null,
  positionX: null,
}

export default withStyles(styles, { withTheme: true })(GrillDashboardItem)
