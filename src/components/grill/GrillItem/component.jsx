import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import {
  Button,
  Popover,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core'

import styles from './styles'

function GrillItem({ classes, title }) {
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
      <Button
        style={{ height: '10px' }}
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

GrillItem.propTypes = {}

export default withStyles(styles, { withTheme: true })(GrillItem)
