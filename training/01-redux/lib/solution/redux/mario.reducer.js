import Immutable from 'immutable'

import { GO_RIGHT, GO_LEFT } from './mario.action.type.js'

const initialState = Immutable.Map({

})

export default function marioReducer(state = initialState, action = { type: undefined }){
  switch (action.type){
    case GO_RIGHT:
    case GO_LEFT:
      return state
    default:
      return state
  }
}