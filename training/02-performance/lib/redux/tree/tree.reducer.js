import Immutable from 'immutable'

import { ADD_CLICK } from './tree.actionTypes'

const initialState = Immutable.fromJS({
  tree: [
   [{ clicks: 1 }],
   [{ clicks: 2 }, { clicks: 3 }],
  ]
})

export default function treeReducer(state = initialState, action = { type: undefined }){
  switch (action.type){
    case ADD_CLICK:
      const level = action.payload.level
      const nodeId = action.payload.nodeId
      return state.setIn(['tree', level, nodeId,'clicks'],
        state.getIn(['tree', level, nodeId, 'clicks']) + 1 )
    default:
      return state
  }
}