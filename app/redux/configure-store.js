import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import {ping} from './enhancers/ping'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(initialState) {
  const logger = createLogger
  const store = createStore(rootReducer, 
    initialState,
    composeEnhancers(applyMiddleware(thunk, logger))
  )

  return store
}
