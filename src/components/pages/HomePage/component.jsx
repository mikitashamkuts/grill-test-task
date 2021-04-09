import React from 'react'
import PropTypes from 'prop-types'

import { Typography, withStyles } from '@material-ui/core'

import { APP_NAME } from '@/constants'
import MainMenu from '@/components/menu/MainMenu'

import styles from './styles'

function HomePage({ classes }) {
  return (
    <MainMenu
      topPanel={
        <Typography className={classes.topMenuSmall}>{APP_NAME}</Typography>
      }
    />
  )
}

HomePage.propTypes = {}

export default withStyles(styles, { withTheme: true })(HomePage)
