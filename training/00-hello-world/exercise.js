// TODO:
///////////////////////////////////
// 1. Get familiar with ./lib/components/mario.js and propTypes you can pass
///////////////////////////////////

///////////////////////////////////
// 2. Get familiar with ./lib/components/mario.js and propTypes you can pass
///////////////////////////////////

///////////////////////////////////
// 3. By passing props to component make mario to walk in left direction
///////////////////////////////////

///////////////////////////////////
// 4. Implement state via constructor eg. Slides
///////////////////////////////////

///////////////////////////////////
// 5. Implement right and left function to move mario via arrow keys
///////////////////////////////////

///////////////////////////////////
// 6. Does Mario stop walking?
///////////////////////////////////

import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'

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
                /* try position x:100 and y:100 */
                <Mario />
              </HotKey>
           </div>
  }
}

render(<HelloWorld />, document.getElementById('app'))