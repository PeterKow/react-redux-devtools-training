import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'
import App from './lib/components/utils/root.js'

import { moveRight, moveLeft } from './lib/solution/redux/marioHigher.action.js'

const timeouts = {}

class HelloMario extends Component {

  render() {

    const { marioState, dispatch } = this.props

    return <div>
      <Board/>
      <HotKey right={() => dispatch(moveRight())} left={() => { dispatch(moveLeft())}}>
        <Mario direction={marioState.get('direction')} movement={marioState.get('movement')} position={{ x: marioState.get('x'), y:marioState.get('y') }}/>
      </HotKey>
    </div>
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state){
  return {
    marioState: state.marioReducer
  }
}

// Wrap the component to inject dispatch and state into it
const HelloMarioRedux = connect(select)(HelloMario)

render(  <App>
          <HelloMarioRedux/>
         </App>, document.getElementById('app'))