import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Paper, withStyles } from '@material-ui/core'

import styles from './styles'

function GrillPanel() {
  const defaultGrillConfig = {
    width: 400,
    height: 200,
  }

  const grillConfig = useSelector(state => state.grillReducers.grillConfig)

  return (
    <>
      <Paper
        style={{
          width: `${grillConfig?.grill?.width || defaultGrillConfig.width}px`,
          height: `${
            grillConfig?.grill?.height || defaultGrillConfig.height
          }px`,
        }}
        variant="outlined"
      />
    </>
  )
}

export default withStyles(styles, { withTheme: true })(GrillPanel)
