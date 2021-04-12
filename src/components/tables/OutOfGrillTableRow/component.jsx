import React from 'react'
import PropTypes from 'prop-types'

import { TableCell, TableRow, withStyles } from '@material-ui/core'

import styles from './styles'

function OutOfGrillTableRow({ classes, title, width, height }) {
  return (
    <TableRow>
      <TableCell data-test="tableCell" component="th" scope="row">
        {title}
      </TableCell>
      <TableCell>{`${width}x${height}`}</TableCell>
    </TableRow>
  )
}

OutOfGrillTableRow.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}
OutOfGrillTableRow.defaultProps = { title: null, width: null, height: null }

export default withStyles(styles, { withTheme: true })(OutOfGrillTableRow)
