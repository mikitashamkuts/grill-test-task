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
  TablePagination,
} from '@material-ui/core'

import OutOfGrillTableRow from '@/components/tables/OutOfGrillTableRow'

import styles from './styles'

function OutOfGrillTable({ classes }) {
  const outOfGrillItems = useSelector(
    state => state.grillReducers.outOfGrillItems
  )

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
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Type </TableCell>
            <TableCell>Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {outOfGrillItems.map(({ title, width, height }, index) => {
            return (
              <OutOfGrillTableRow
                key={title + index}
                title={title}
                width={width}
                height={height}
              />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default withStyles(styles, { withTheme: true })(OutOfGrillTable)
