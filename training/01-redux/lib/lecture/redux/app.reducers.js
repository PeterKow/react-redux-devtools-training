import { combineReducers } from 'redux'
import marioReducer from './mario.reducer.js'

const allReducers = combineReducers({
  marioReducer
})

export default allReducers

