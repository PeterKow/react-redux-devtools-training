import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import Turtle from './lib/components/turtle.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'
import App from './lib/components/utils/root.js'

const timeouts = {}

export default class HelloMario extends Component {

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

    this.setState({direction: 'right'})
    this.setState({movement: 'walk'})
    this.setState({x: this.state.x + 2})

    timeouts.stand = setTimeout(()=> {
      this.setState({movement: 'stand'})
    }, 500)
  }

  left() {
    clearTimeout(timeouts.stand);

    this.setState({direction: 'left'})
    this.setState({movement: 'walk'})
    this.setState({x: this.state.x - 2})

    timeouts.stand = setTimeout(()=> {
      this.setState({movement: 'stand'})
    }, 500)
  }

  render() {
    return <div>
      <Board/>
      <HotKey right={::this.right} left={::this.left}>
        <Mario direction={this.state.direction} movement={this.state.movement} position={{ x: this.state.x, y: this.state.y }}/>
        <Turtle/>
      </HotKey>
    </div>
  }
}

render( <App reducerSource='lecture'>
          <HelloMario/>
        </App>, document.getElementById('app'))

///////////////////////////////////
// 1. New requirement!!! and turtle
///////////////////////////////////
// <Turtle/>

///////////////////////////////////
// 2. Introduction to Flux
///////////////////////////////////
// Slides

///////////////////////////////////
// 3. Create action types
///////////////////////////////////
//