import React from 'react'
import PropTypes from 'prop-types'

import { Typography, withStyles } from '@material-ui/core'

import styles from './styles'

function MainWrapper({ classes, children }) {
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

MainWrapper.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.element,
}
MainWrapper.defaultProps = {
  children: null,
}

export default withStyles(styles, { withTheme: true })(MainWrapper)
