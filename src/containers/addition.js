import React from 'react'
import { connect } from 'react-redux'
import { additionAChange, additionBChange } from '../actions'
import Addition from '../components/addition'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => ({
    ...state.reducer.addition
})

const mapDispatchToProps = {
    onAChange: additionAChange,
    onBChange: additionBChange,
    push
}

export default connect(mapStateToProps, mapDispatchToProps)(Addition)
