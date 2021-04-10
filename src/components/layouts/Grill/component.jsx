import React from 'react'
import PropTypes from 'prop-types'

import { Paper } from '@material-ui/core'

import GrillInput from '@/components/controls/GrillInput'
import OutOfGrillTable from '@/components/tables/OutOfGrillTable'
import GrillPanel from '@/components/grill/GrillPanel'

function Grill() {
  return (
    <>
      <GrillPanel />
      <OutOfGrillTable/>
      <GrillInput />
    </>
  )
}

Grill.propTypes = {}

Grill.defaultProps = {}

export default Grill
