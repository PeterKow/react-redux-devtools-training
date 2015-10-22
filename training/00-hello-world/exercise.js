import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'

let keyDown

export default class HelloWorld extends Component {

  constructor(props){
    super(props)

    this.state = {
      movement: 'stand',
      x: 100,
      y: 100
    }
  }

  right(sub){
    console.log('right')
    this.setState({ movement: 'walk' })
    setTimeout(()=>{
      console.log('change')
      this.setState({ x: this.state.x + 2})
    }, 250)
    sub.subscribe(() => {
      console.log('change go')
      this.setState({ movement: 'stand' })
    })
  }

  right2(){
    console.log('change go')
    this.setState({ movement: 'stand' })
    //setTimeout(()=>{
    //  console.log('change')
    //  this.setState({ movement: 'stand' })
    //}, 500)
  }

  observable(sub){
    keyDown = sub.map(function (e) {
      return e.keyCode;
    })

    keyDown.subscribe(() => {
      console.log('-------222')
      //this.setState({ movement: 'stand' })
    })
  }

  render() {
    return <div>Hello
              <HotKey right={::this.right} observable={::this.observable} >
                <Mario startingPosition='right' movement={this.state.movement} position={{ x: this.state.x, y: this.state.y }}/>
              </HotKey>
           </div>
  }
}
render(<HelloWorld />, document.getElementById('app'))