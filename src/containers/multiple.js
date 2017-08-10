import React from 'react'
import { connect } from 'react-redux'
import { multipleAChange } from '../actions'
import Multiple from '../components/multiple'

const mapStateToProps = (state) => ({
		...state.multiple
})

const mapDispatchToProps = {
		onAChange: multipleAChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiple)
