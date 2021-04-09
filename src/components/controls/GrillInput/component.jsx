import React from 'react'
import PropTypes from 'prop-types'

import { Input, withStyles } from '@material-ui/core'

import styles from './styles'

function GrillInput({ classes }) {
  return <Input />
}

GrillInput.propTypes = {}

export default withStyles(styles, { withTheme: true })(GrillInput)
