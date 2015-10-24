import React, { Component } from 'react'
import { render } from 'react-dom'
import Mario from './lib/components/mario.js'
import Turtle from './lib/components/turtle.js'
import HotKey from './lib/components/hotkey.js'
import Board from './lib/components/board.js'
import App from './lib/components/utils/root.js'

const timeouts = {}

export default class HelloMario extends Component {

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
    return <div>
      <Board/>
      <HotKey right={::this.right} left={::this.left}>
        <Mario direction={this.state.direction} movement={this.state.movement} position={{ x: this.state.x, y: this.state.y }}/>
        <Turtle/>
      </HotKey>
    </div>
  }
}

render( <App reducerSource='lecture'>
  <HelloMario/>
</App>, document.getElementById('app'))

///////////////////////////////////
// 1. New requirement!!! and turtle
///////////////////////////////////
// <Turtle/>

///////////////////////////////////
// 2. Introduction to Flux
///////////////////////////////////
// Slides

///////////////////////////////////
// 3. Create action types
///////////////////////////////////
// import Keymirror from 'keymirror'
//
//const marioActionTypes = Keymirror({
//  'GO_RIGH': null,
//  'GO_LEFT': null
//})
//
//Object.freeze(marioActionTypes)
//
//export default marioActionTypes

///////////////////////////////////
// 4. Create actions
///////////////////////////////////
// import { GO_LEFT, GO_RIGHT } from './mario.action.type.js'
//
//export function goLeft(){
//  return { type: GO_LEFT }
//}
//
//export function goRight(){
//  return { type: GO_RIGHT }
//}

///////////////////////////////////
// 5. Create store
///////////////////////////////////
//import Immutable from 'immutable'
//
//const initialStore = Immutable.Map({
//
//})

///////////////////////////////////
// 6. Create reducers
///////////////////////////////////
//export default function marioReducer(state = initialStore, action = { type: undefined }){
//  switch (action.type){
//    case GO_LEFT:
//    case GO_RIGHT:
//      return state
//    default:
//      return state
//  }
//}

///////////////////////////////////
// 7. Connect store with Flux
///////////////////////////////////
// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
//function select(state){
//  return {
//    marioState: state.marioReducer
//  }
//}
//
// Wrap the component to inject dispatch and state into it
//const HelloMarioRedux = connect(select)(HelloMario)

///////////////////////////////////
// 8. Move component state to the store and create actions
///////////////////////////////////
//
//const initialStore = Immutable.Map({
//  direction: 'right',
//  movement: 'stand',
//  x: 100,
//  y: 100
//})
//
//export default function marioReducer(state = initialStore, action = { type: undefined }){
//  switch (action.type){
//    case GO_LEFT:
//      return state.merge({direction: 'left', movement: 'walk', x: state.get('x') - 2})
//    case GO_RIGHT:
//      return state.merge({direction: 'right', movement: 'walk', x: state.get('x') + 2})
//    default:
//      return state
//  }
//}
//

///////////////////////////////////
// 9. Passing store data to render
///////////////////////////////////
// // select
// marioState: state.marioReducer
// // render
// const { marioState } = this.props
// <Mario direction={marioState.get('direction')} movement={marioState.get('movement')} position={{ x: marioState.get('x'), y: marioState.get('y') }}/>

///////////////////////////////////
// 10. Dispatch action
///////////////////////////////////
// import { goRight } from './lib/lecture/redux/mario.actions.js'
// const { dispatch } = this.props
// dispatch(goRight())

///////////////////////////////////
// 11. Implement stand action
///////////////////////////////////

///////////////////////////////////
// 12. Implement left action
///////////////////////////////////

///////////////////////////////////
// 13. Refactor - Group fundamental actions like "goRight" and "stand" into "moveRight" eg. solution/marioHigher.action.js
///////////////////////////////////

///////////////////////////////////
// 14. Refactor - pass dispatch actions directly to HotKey component
///////////////////////////////////



///////////////////////////////////
// Final lecture code
///////////////////////////////////
//import React, { Component } from 'react'
//import { render } from 'react-dom'
//import { connect } from 'react-redux'
//import Mario from './lib/components/mario.js'
//import Turtle from './lib/components/turtle.js'
//import HotKey from './lib/components/hotkey.js'
//import Board from './lib/components/board.js'
//import App from './lib/components/utils/root.js'
//
//import { goRight } from './lib/lecture/redux/mario.actions.js'
//
//const timeouts = {}
//
//class HelloMario extends Component {
//
//  constructor(props){
//    super(props)
//
//    this.state = {
//      direction: 'right',
//      movement: 'stand',
//      x: 100,
//      y: 100
//    }
//  }
//
//  right() {
//    clearTimeout(timeouts.stand);
//
//    const { dispatch } = this.props
//    dispatch(goRight())
//
//    timeouts.stand = setTimeout(()=> {
//      this.setState({movement: 'stand'})
//    }, 500)
//  }
//
//  left() {
//    clearTimeout(timeouts.stand);
//
//    timeouts.stand = setTimeout(()=> {
//      this.setState({movement: 'stand'})
//    }, 500)
//  }
//
//  render() {
//
//    const { marioState } = this.props
//
//    return <div>
//      <Board/>
//      <HotKey right={::this.right} left={::this.left}>
//        <Mario direction={marioState.get('direction')} movement={marioState.get('movement')} position={{ x: marioState.get('x'), y: marioState.get('y') }}/>
//        <Turtle/>
//      </HotKey>
//    </div>
//  }
//}
//
//function select(state){
//  return {
//    marioState: state.marioReducer
//  }
//}
//
//const HelloMarioRedux = connect(select)(HelloMario)
//
//render( <App reducerSource='lecture'>
//  <HelloMarioRedux/>
//</App>, document.getElementById('app'))


///////////////////////////////////
// Starting lecture code
///////////////////////////////////
//import React, { Component } from 'react'
//import { render } from 'react-dom'
//import Mario from './lib/components/mario.js'
//import HotKey from './lib/components/hotkey.js'
//import Board from './lib/components/board.js'
//import App from './lib/components/utils/root.js'
//
//const timeouts = {}
//
//export default class HelloMario extends Component {
//
//  constructor(props){
//    super(props)
//
//    this.state = {
//      direction: 'right',
//      movement: 'stand',
//      x: 100,
//      y: 100
//    }
//  }
//
//  right() {
//    clearTimeout(timeouts.stand);
//
//    this.setState({direction: 'right'})
//    this.setState({movement: 'walk'})
//    this.setState({x: this.state.x + 2})
//
//    timeouts.stand = setTimeout(()=> {
//      this.setState({movement: 'stand'})
//    }, 500)
//  }
//
//  left() {
//    clearTimeout(timeouts.stand);
//
//    this.setState({direction: 'left'})
//    this.setState({movement: 'walk'})
//    this.setState({x: this.state.x - 2})
//
//    timeouts.stand = setTimeout(()=> {
//      this.setState({movement: 'stand'})
//    }, 500)
//  }
//
//  render() {
//    return <div>
//      <Board/>
//      <HotKey right={::this.right} left={::this.left}>
//        <Mario direction={this.state.direction} movement={this.state.movement} position={{ x: this.state.x, y: this.state.y }}/>
//      </HotKey>
//    </div>
//  }
//}
//
//render( <App reducerSource='lecture'>
//  <HelloMario/>
//</App>, document.getElementById('app'))