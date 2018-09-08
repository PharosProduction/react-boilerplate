import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'

import reducers from 'src/reducers'

// Store

export default function configureStore(initialState = {}) {
  const middlewares = []
  middlewares.push(reduxPromise)

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

	const store = createStore(
    reducers,
    initialState,
		composeEnhancers(applyMiddleware(...middlewares))
	)

	return store
}