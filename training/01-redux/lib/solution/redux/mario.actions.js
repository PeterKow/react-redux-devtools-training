import { GO_RIGHT, GO_LEFT } from './mario.action.type.js'

export function goRight(){
  return { type: GO_RIGHT }
}

export function goLeft(){
  return { type: GO_LEFT }
}