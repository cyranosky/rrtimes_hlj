import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Additon from './containers/addition'
import Subtraction from './containers/subtraction'
import Multiple from './containers/multiple'

const store = createStore(reducer)
window.store = store
render(
	<Provider store={store}>
		<div>
			<Additon />
			<Subtraction />
			<Multiple />
		</div>
	</Provider>,
	document.getElementById('app')
)
