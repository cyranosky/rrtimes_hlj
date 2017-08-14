//a-b=c
const subtraction = (state = { a: 1, b: 1, c: 0 }, action) => {
    console.log(state)
    switch (action.type) {
        case 'SUBTRACTION_A_CHANGE':
            return {
                ...state,
                a: action.value,
                c: Number( action.value) - state.b
            }
        case 'SUBTRACTION_B_CHANGE':
            return {
                ...state,
                b: action.value,
                c: Number(state.a) - Number(action.value)
            }
        default:
            return state
    }
}

export default subtraction
