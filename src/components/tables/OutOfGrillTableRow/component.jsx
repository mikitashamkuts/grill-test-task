import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { TableCell, TableRow, withStyles } from '@material-ui/core'

import styles from './styles'

function OutOfGrillTableRow() {
  return (
    <div>
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
      </TableRow>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(OutOfGrillTableRow)
