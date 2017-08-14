//a+b=c
const addition = (state = { a: 1, b: 1, c: 2 }, action) => {
    console.log(action)

    switch (action.type) {

        case 'ADDITION_A_CHANGE':
            return {
                ...state,
                a: action.value,
                c: Number(action.value) + state.b
            }
        case 'ADDITION_B_CHANGE':
            return {
                ...state,
                b: action.value,
                c: Number(action.value) + Number(state.a)
            }
        default:
            return state
    }
}

export default addition
