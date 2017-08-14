import React from 'react'
import { connect } from 'react-redux'
import { additionAChange, additionBChange } from '../actions'
import Addition from '../components/addition'

const mapStateToProps = (state) => ({
    ...state.addition
})

const mapDispatchToProps = {
    onAChange: additionAChange,
    onBChange: additionBChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Addition)
