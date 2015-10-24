import { GO_LEFT, GO_RIGHT } from './mario.action.type.js'

export function goLeft(){
  return { type: GO_LEFT }
}

export function goRight(){
  return { type: GO_RIGHT }
}