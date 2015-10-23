import Immutable from 'immutable'

import { GO_RIGHT, GO_LEFT } from './mario.action.type.js'

const initialState = Immutable.Map({
    direction: 'right',
    movement: 'stand',
    x: 100,
    y: 100
})

export default function marioReducer(state = initialState, action = { type: undefined }){
  switch (action.type){
    case GO_RIGHT:
      return state.merge({ direction: 'right', movement: 'walk', x: state.get('x') + 2 })
    case GO_LEFT:
      return state
    default:
      return state
  }
}