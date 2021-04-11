import React from 'react'
import PropTypes from 'prop-types'

import { TableCell, TableRow, withStyles } from '@material-ui/core'

import styles from './styles'

function OutOfGrillTableRow({ classes, title, width, height }) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell>{`${width}x${height}`}</TableCell>
    </TableRow>
  )
}

OutOfGrillTableRow.propTypes = {}
OutOfGrillTableRow.defaultProps = {}

export default withStyles(styles, { withTheme: true })(OutOfGrillTableRow)
