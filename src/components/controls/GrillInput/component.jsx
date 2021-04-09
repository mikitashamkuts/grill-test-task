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
      id="outlined-basic"
      label="Grill Config"
      variant="outlined"
      onChange={handleChange}
    />
  )
}

GrillInput.propTypes = {}

export default withStyles(styles, { withTheme: true })(GrillInput)
