import { goLeft, goRight, stand } from './mario.actions.js'

const timeouts = {}

export function moveRight(){
  return dispatch => {
    dispatch(goRight())

    clearTimeout(timeouts.stand);

    timeouts.stand = setTimeout(()=> {
      dispatch(stand())
    }, 500)
  }
}