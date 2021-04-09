import React from 'react'
import PropTypes from 'prop-types'

import { Paper } from '@material-ui/core'

import GrillInput from '@/components/controls/GrillInput'
import GrillPanel from '@/components/grill/GrillPanel'

function Grill() {
  return (
    <>
      <GrillPanel />
      <GrillInput />
    </>
  )
}

Grill.propTypes = {}

Grill.defaultProps = {}

export default Grill
