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
      movement: 'stand',
      x: 100,
      y: 100
    }
  }

  right() {
    clearTimeout(timeouts.stand);

    this.setState({movement: 'walk'})
    this.setState({x: this.state.x + 2})

    timeouts.stand = setTimeout(()=> {
      this.setState({movement: 'stand'})
    }, 500)
  }

  render() {
    return <div>
              <Board/>
              <HotKey right={::this.right} >
                <Mario startingPosition='right' movement={this.state.movement} position={{ x: this.state.x, y: this.state.y }}/>
              </HotKey>
           </div>
  }
}

render(<HelloWorld />, document.getElementById('app'))