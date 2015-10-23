import Immutable from 'immutable'

const initialState = Immutable.Map({})

export default function marioReducer(state = initialState, action = { type: undefined }){
  switch (action.type){
    default:
      return state
      break
  }
}