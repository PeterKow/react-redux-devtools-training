import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'

export default class HelloWorld extends Component {
  render() {
    return <div>Hello
              <Mario startingPosition='left' position={{ x: 100, y: 100 }}/>
           </div>
  }
}
render(<HelloWorld />, document.getElementById('app'))