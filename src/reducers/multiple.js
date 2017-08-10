//a*b=c
const multiple = (state = {a: 1, b: 1, c: 1}, action) => {
		console.log(action)

		switch (action.type) {

				case 'MULTIPLE_A_CHANGE':
						return {
								...state,
								a: action.value,
								c: Number(action.value) * state.b
						}
				default:
						return state
		}
}

export default multiple
