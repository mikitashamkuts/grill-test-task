import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Popover, Typography, withStyles, Card } from '@material-ui/core'

import styles from './styles'

function GrillDashboardItem({
  classes,
  title,
  height,
  width,
  positionY,
  positionX,
}) {
  const [anchorEl, setAnchorEl] = useState(null)

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
          height: `${height}px`,
          width: `${width}px`,
          top: positionY,
          left: positionX,
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
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography>{title}</Typography>
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
}
GrillDashboardItem.defaultProps = {
  title: null,
  width: null,
  height: null,
  positionY: null,
  positionX: null,
}

export default withStyles(styles, { withTheme: true })(GrillDashboardItem)
