import { ADD_CLICK, } from './tree.actionTypes'

export { addClickToNode }

function addClickToNode(payload){
  return { type: ADD_CLICK, payload }
}
