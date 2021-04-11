/*
  Use props topPanel to add menu items and props 
  routedComponents to add routed components on Home layout
*/

import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import { withStyles, AppBar, Toolbar, CssBaseline } from '@material-ui/core'

import styles from './styles'

function MainMenu({ classes, topPanel, routedComponents, theme }) {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <div className={classes.toolbar}>{topPanel}</div>
        </Toolbar>
      </AppBar>
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        {routedComponents}
      </main>
    </div>
  )
}

MainMenu.propTypes = {
  topPanel: PropTypes.node.isRequired,
}
MainMenu.defaultProps = {}

export default withStyles(styles, { withTheme: true })(MainMenu)
