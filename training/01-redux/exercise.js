import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import marioReducer from './lib/redux/mario.reducer.js'

export default class HelloMario extends Component {

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
    return <div>
            <Board/>
            <HotKey right={::this.right}>
              <Mario startingPosition='right' movement={this.state.movement} position={{ x: this.state.x, y: this.state.y }}/>
            </HotKey>
           </div>
  }
}

let store = createStore(marioReducer);

@connect(({ application }) => ({ application }))
class Root extends React.Component {
  //static propTypes = {
  //  application: React.PropTypes.object.isRequired,
  //  history: React.PropTypes.object.isRequired
  //};

  render () {
    return (
      <HelloMario/>
    )
  }
}

render(  <Provider store={store}>
          <Root/>
        </Provider>
  , document.getElementById('app'))