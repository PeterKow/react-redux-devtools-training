import { GO_RIGHT, GO_LEFT, STAND } from './mario.action.type.js'

export function stand(){
  return { type: STAND }
}

export function goRight(){
  return { type: GO_RIGHT }
}

export function goLeft(){
  return { type: GO_LEFT }
}