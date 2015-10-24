// TODO:
///////////////////////////////////
// 1. Implement stand action
///////////////////////////////////

///////////////////////////////////
// 2. Implement left action
///////////////////////////////////

///////////////////////////////////
// 3. Refactor - Group fundamental actions like "goRight" and "stand" into "moveRight" eg. solution/marioHigher.action.js
///////////////////////////////////

///////////////////////////////////
// 4. Refactor - pass dispatch actions directly to HotKey component
///////////////////////////////////

import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Mario from './lib/components/mario.js'
import Turtle from './lib/components/turtle.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'
import App from './lib/components/utils/root.js'

import { goRight } from './lib/redux/mario.actions.js'

const timeouts = {}

class HelloMario extends Component {

  constructor(props){
    super(props)

    this.state = {
      direction: 'right',
      movement: 'stand',
      x: 100,
      y: 100
    }
  }

  right() {
    clearTimeout(timeouts.stand);

    const { dispatch } = this.props
    dispatch(goRight())

    timeouts.stand = setTimeout(()=> {
      this.setState({movement: 'stand'})
    }, 500)
  }

  left() {
    clearTimeout(timeouts.stand);

    timeouts.stand = setTimeout(()=> {
      this.setState({movement: 'stand'})
    }, 500)
  }

  render() {

    const { marioState } = this.props

    return <div>
      <Board/>
      <HotKey right={::this.right} left={::this.left}>
        <Mario direction={marioState.get('direction')} movement={marioState.get('movement')} position={{ x: marioState.get('x'), y: marioState.get('y') }}/>
        <Turtle/>
      </HotKey>
    </div>
  }
}

function select(state){
  return {
    marioState: state.marioReducer
  }
}

const HelloMarioRedux = connect(select)(HelloMario)

render( <App>
          <HelloMarioRedux/>
        </App>, document.getElementById('app'))