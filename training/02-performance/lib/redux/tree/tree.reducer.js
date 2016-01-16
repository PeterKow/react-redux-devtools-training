import Immutable from 'immutable'

import { ADD_CLICK, ADD_SUBCLICK } from './tree.actionTypes'
import nested from './menuNested'

const initialState = Immutable.fromJS({
  tree: generateTree(5)
})

export default function treeReducer(state = initialState, action = { type: undefined }){
  let level
  let nodeId
  let subNodeId
  if(action.payload) {
    level = action.payload.level
    nodeId = action.payload.nodeId
    subNodeId = action.payload.subNodeId
  }
  switch (action.type){
    case ADD_CLICK:

      return state.setIn(['tree', level, nodeId,'clicks'],
        state.getIn(['tree', level, nodeId, 'clicks']) + 1 )
    case ADD_SUBCLICK:
      return state.setIn(['tree', level, nodeId, 'subNode', 'clicks'],
        state.getIn(['tree', level, nodeId, 'subNode','clicks']) + 1 )
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
    subNode: {
      clicks: 0,
      subNodeData: 'hello'
    },
    nested
  }
}