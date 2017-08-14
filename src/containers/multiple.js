import React from 'react'
import { connect } from 'react-redux'
import { multipleAChange, multipleBChange } from '../actions'
import Multiple from '../components/multiple'

const mapStateToProps = (state) => ({
		...state.multiple
})

const mapDispatchToProps = {
		onAChange: multipleAChange,
		onBChange: multipleBChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiple)
