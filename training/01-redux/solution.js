import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'
import App from './lib/components/utils/root.js'

const timeouts = {}

class HelloMario extends Component {

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
    const { dispatch } = this.props

    return <div>
      <Board/>
      <HotKey right={::this.right} left={::this.left}>
        <Mario direction={this.state.direction} movement={this.state.movement} position={{ x: this.state.x, y: this.state.y }}/>
      </HotKey>
    </div>
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(){
  return {}
}

// Wrap the component to inject dispatch and state into it
const HelloMarioRedux = connect(select)(HelloMario)

render(  <App>
          <HelloMarioRedux/>
         </App>, document.getElementById('app'))