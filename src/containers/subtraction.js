import React from 'react'
import { connect } from 'react-redux'
import { subtractionAChange, subtractionBChange } from '../actions'
import Subtraction from '../components/subtraction'

const mapStateToProps = (state) => ({
  ...state.subtraction
})

const mapDispatchToProps = {
  onAChange: subtractionAChange,
  onBChange: subtractionBChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Subtraction)
