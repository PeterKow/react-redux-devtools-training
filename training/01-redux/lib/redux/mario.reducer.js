import Immutable from 'immutable'
import { GO_LEFT, GO_RIGHT } from './mario.action.type.js'

const initialStore = Immutable.Map({
  direction: 'right',
  movement: 'stand',
  x: 100,
  y: 100
})

export default function marioReducer(state = initialStore, action = { type: undefined }){
  switch (action.type){
    case GO_LEFT:
      return state.merge({direction: 'left', movement: 'walk', x: state.get('x') - 2})
    case GO_RIGHT:
      return state.merge({direction: 'right', movement: 'walk', x: state.get('x') + 2})
    default:
      return state
  }
}

