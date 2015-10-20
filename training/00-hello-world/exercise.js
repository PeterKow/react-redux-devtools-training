import React, { Component } from 'react'
import { render } from 'react-dom'

export default class HelloWorld extends Component {
  render() {
    return <h1>Hello</h1>
  }
}
render(<HelloWorld />, document.getElementById('app'))