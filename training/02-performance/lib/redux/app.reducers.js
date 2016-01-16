import { combineReducers } from 'redux'
import marioReducer from './mario.reducer.js'
import treeReducer from './tree/tree.reducer'

const allReducers = combineReducers({
  marioReducer,
  treeReducer
})

export default allReducers

