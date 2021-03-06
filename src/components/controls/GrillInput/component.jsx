import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { TextField, withStyles } from '@material-ui/core'

import { getUserInputForGrillConfigAction } from '@/actions'

import styles from './styles'

function GrillInput({ classes }) {
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(getUserInputForGrillConfigAction(e.target.value))
  }

  return (
    <TextField
      onChange={handleChange}
      className={classes.textField}
      id="outlined-basic"
      label="Grill Config"
      variant="outlined"
      multiline
    />
  )
}

GrillInput.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
}
GrillInput.defaultProps = {}

export default withStyles(styles, { withTheme: true })(GrillInput)
