import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'

export default class HelloWorld extends Component {

  right() {
    // to set state use this.SetState({})
  }

  left() {
    // to set state use this.SetState({})
  }

  render() {
    return <div>
              <Board/>
              <HotKey right={::this.right} left={::this.left} >
                <Mario />
              </HotKey>
           </div>
  }
}

render(<HelloWorld />, document.getElementById('app'))