import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'

export default class HelloWorld extends Component {

  constructor(props){
    super(props)

    this.state = {
      movement: 'stand',
      x: 100,
      y: 100
    }
  }

  right(){
    console.log('right')
    this.setState({ x: this.state.x + 1})
    this.setState({ movement: 'walk' })
    setTimeout(()=>{
      console.log('change')
      this.setState({ movement: 'stand' })
    }, 1000)
  }

  render() {
    return <div>Hello
              <HotKey right={::this.right}>
                <Mario startingPosition='right' movement={this.state.movement} position={{ x: this.state.x, y: this.state.y }}/>
              </HotKey>
           </div>
  }
}
render(<HelloWorld />, document.getElementById('app'))