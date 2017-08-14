export const additionAChange = (e) => ({
    type: 'ADDITION_A_CHANGE',
    value:e.target.value
})

export const additionBChange = (e) => ({
    type: 'ADDITION_B_CHANGE',
    value:e.target.value
})

export const subtractionAChange = (e) => ({
    type: 'SUBTRACTION_A_CHANGE',
    value:e.target.value
})

export const subtractionBChange = (e) => ({
    type: 'SUBTRACTION_B_CHANGE',
    value:e.target.value
})

export const multipleAChange = (e) => ({
    type: 'MULTIPLE_A_CHANGE',
    value:e.target.value
})

export const multipleBChange = (e) => ({
    type: 'MULTIPLE_B_CHANGE',
    value:e.target.value
})
