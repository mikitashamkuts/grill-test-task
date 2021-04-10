import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from '@material-ui/core'

import styles from './styles'

function OutOfGrillTable({ classes }) {
  return (
    <TableContainer component={Paper}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Items out of grill
      </Typography>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Type </TableCell>
            <TableCell align="right">Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default withStyles(styles, { withTheme: true })(OutOfGrillTable)
