import Immutable from 'immutable'

import { ADD_CLICK } from './tree.actionTypes'
import nested from './menuNested'

const initialState = Immutable.fromJS({
  tree: [
    {
      clicks: 0, nodes: [
      { clicks: 0, nodes: [] },
      { clicks: 0, nodes: [] },
    ]
    },
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

function generateTree(levels) {
  const tree = []
  for(let i=1; i < levels; i++) {
    let level

    level = generateLevel(i)
    tree.push(level)
  }
  return tree
}

function generateLevel(levelNr) {
  const level = []
  const nodesNr = levelNr === 1 ? 1 : (levelNr - 1) * 2
  for(let i=0; i<nodesNr; i++) {
    level.push(createNode())
  }
  return level
}

function createNode() {
  return {
    clicks: 0,
    nested
  }
}