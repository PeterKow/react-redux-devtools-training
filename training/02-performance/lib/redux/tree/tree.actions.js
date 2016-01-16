import { ADD_CLICK, ADD_SUBCLICK, ADD_SUB_SUBCLICK } from './tree.actionTypes'

export { addClickToNode }
export { addClickToSubNode }
export { addClickToSubSubNode }

function addClickToNode(payload){
  return { type: ADD_CLICK, payload }
}

function addClickToSubNode(payload){
  return { type: ADD_SUBCLICK, payload }
}

function addClickToSubSubNode(payload){
  return { type: ADD_SUB_SUBCLICK, payload }
}