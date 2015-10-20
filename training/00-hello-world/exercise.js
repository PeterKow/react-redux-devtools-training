import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'

export default class HelloWorld extends Component {

  constructor(props){
    super(props)

    this.state = {
      x: 100,
      y: 100
    }
  }

  right(){
    console.log('right')
    this.setState({ x: this.state.x + 1})
  }

  render() {
    return <div>Hello
              <HotKey right={::this.right}>
                <Mario startingPosition='left' position={{ x: this.state.x, y: this.state.y }}/>
              </HotKey>
           </div>
  }
}
render(<HelloWorld />, document.getElementById('app'))