import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { TableCell, TableRow, withStyles } from '@material-ui/core'

import styles from './styles'

function OutOfGrillTableRow({ styles, title, width, height }) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell>{`${width}x${height}`}</TableCell>
    </TableRow>
  )
}

export default withStyles(styles, { withTheme: true })(OutOfGrillTableRow)
