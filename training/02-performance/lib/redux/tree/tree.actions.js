import { ADD_CLICK, ADD_SUBCLICK} from './tree.actionTypes'

export { addClickToNode }
export { addClickToSubNode }

function addClickToNode(payload){
  return { type: ADD_CLICK, payload }
}

function addClickToSubNode(payload){
  return { type: ADD_SUBCLICK, payload }
}