import { combineReducers } from 'redux'
import recycleState from 'redux-recycle'

import { LOGOUT } from 'src/actions/auth'

// Reducers

const rootReducer = combineReducers({
})
const safeRootReducer = recycleState(rootReducer, [LOGOUT]);

export default safeRootReducer