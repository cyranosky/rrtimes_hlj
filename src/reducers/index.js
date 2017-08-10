import { combineReducers } from 'redux'

//加法
import addition from './addition'

//减法
import subtraction from './subtraction'

//乘法
import multiple from './multiple'

export default combineReducers({
    addition,
    subtraction,
    multiple
})
