import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import {ping} from './enhancers/ping'
import createLogger from 'redux-logger'

export default function configureStore(initialState) {
  const logger = createLogger
  const store = createStore(rootReducer, 
    initialState,
    applyMiddleware(logger))

  return store
}
