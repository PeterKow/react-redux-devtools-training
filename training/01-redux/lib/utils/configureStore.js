/* global __DEVTOOLS__ */
/* global __DEVTOOLS__ */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from './logger'
import { persistState } from 'redux-devtools';
import combinedReducer from '../redux/app.reducers.js'
import combinedReducerSolution from '../solution/redux/app.reducers.js'
import combinedReducerLecture from '../lecture/redux/app.reducers.js'
import DevTools from '../components/utils/devTools.js'

let combinedCreateStore
const storeEnhancers = []

//for training harcoded to true
//const __DEVTOOLS__ =  process.env.DEVTOOLS;
const __DEVTOOLS__ =  true;
if (__DEVTOOLS__) {
  storeEnhancers.push(DevTools.instrument())
  storeEnhancers.push(persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))
}
combinedCreateStore = compose(...storeEnhancers)(createStore)


const finalCreateStore = applyMiddleware(thunk, logger)(combinedCreateStore)

export default function configureStore (initialState, reducerSource) {

  let store;
  if(reducerSource === 'solution'){
    store = finalCreateStore(combinedReducerSolution, initialState)
  } else if(reducerSource === 'lecture'){
    store = finalCreateStore(combinedReducerLecture, initialState)
  }else {
    store = finalCreateStore(combinedReducer, initialState)
  }


  if (module.hot)
  // Enable Webpack hot module replacement for reducers
    module.hot.accept('../redux/app.reducers.js', () => {
      const nextRootReducer = require('../redux/app.reducers.js')
      store.replaceReducer(nextRootReducer)
    })

  return store
}
