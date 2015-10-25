import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'
import Instructions from './lib/components/instructions.js'

export default class HelloWorld extends Component {

  constructor(props) {
    super(props)
    console.warn('Create state to store info about mario position etc. ')
  }

  right() {
    console.warn('use this.setState to move mario')
    // to set state use this.setState({})
  }

  left() {
    console.warn('use this.setState to move mario')
    // to set state use this.setState({})
  }

  render() {
    return <div>
              <Board/>
              <HotKey right={::this.right} left={::this.left} >
                {/* try position x:100 and y:100 */}
              </HotKey>
              <Instructions/>
           </div>
  }
}

render(<HelloWorld />, document.getElementById('app'))