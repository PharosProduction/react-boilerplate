import { combineReducers } from 'redux'
import recycleState from 'redux-recycle'

import { LOGOUT } from 'src/actions/auth'

import { test as testReducer } from './test'

// Reducers

const libReducers = {}
const appReducers = {
  testReducer
}

const rootReducer = combineReducers({
  ...libReducers,
  ...appReducers
})
const safeRootReducer = recycleState(rootReducer, [LOGOUT]);

export default safeRootReducer