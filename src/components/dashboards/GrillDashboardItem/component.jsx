import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import {
  Button,
  Popover,
  TextField,
  Typography,
  withStyles,
  positions,
  Box,
  Paper,
} from '@material-ui/core'

import styles from './styles'

function GrillDashboardItem({
  classes,
  title,
  height,
  width,
  positionY,
  positionX,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <Paper
        style={{
          position: 'absolute',
          height: `${height}px`,
          width: `${width}px`,
          top: positionY,
          left: positionX,
          background: 'red',
          border: '1px solid white',
        }}
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>{title}</Typography>
      </Popover>
    </>
  )
}

GrillDashboardItem.propTypes = {}

export default withStyles(styles, { withTheme: true })(GrillDashboardItem)
