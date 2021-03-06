import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'

const timeouts = {}

export default class HelloWorld extends Component {

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

    const { direction, movement, x, y } = this.state
    return <div>
            <Board/>
            <HotKey right={::this.right} left={::this.left} >
              <Mario direction={direction} movement={movement} position={{ x: x, y: y }}/>
            </HotKey>
          </div>
  }
}

render(<HelloWorld />, document.getElementById('app'))