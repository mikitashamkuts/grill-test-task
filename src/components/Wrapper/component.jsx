import React from 'react'
import PropTypes from 'prop-types'

import { Typography, withStyles } from '@material-ui/core'

import styles from './styles'

function Wrapper({ classes, children }) {
  return (
    <Typography
      className={classes.tableContent}
      variant="body1"
      component="div"
    >
      {children}
    </Typography>
  )
}

Wrapper.propTypes = {
  children: PropTypes.element,
}

Wrapper.defaultProps = { children: null }

export default withStyles(styles, { withTheme: true })(Wrapper)
