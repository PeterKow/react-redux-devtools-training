import React, { Component } from 'react'
import { render } from 'react-dom'
import Bord from './lib/components/board.js'
import Hotkey from './lib/components/hotkey.js'
import Mario from './lib/components/mario.js'

export default class HelloWorld extends Component {

  render() {
    return  <div>Hello World</div>
  }
}

render(<HelloWorld />, document.getElementById('app'))

///////////////////////////////////
// 1. Component is just a function which takes a props and state
///////////////////////////////////
// function ComponentMe(props, state){
//   return <h1>Hello World</h1>
// }

///////////////////////////////////
// 2. Use props
///////////////////////////////////
// function ComponentMe(props){
//   return <h1>Hello World {props.name}</h1>
// }
//   <ComponentMe name='Peter'/>

///////////////////////////////////
// 3. To have access to lifecycle hooks of component extend Component class
///////////////////////////////////
//class ComponentMe extends Component {
//  render() {
//    return <h1>Hello World</h1>
//  }
//}

///////////////////////////////////
// 4. Class with props
///////////////////////////////////
//class ComponentMe extends Component {
//  render() {
//    const { name } = this.props
//    return <h1>Hello World {name}</h1>
//  }
//}
//   <ComponentMe name='Peter'/>

///////////////////////////////////
// 5. Class with state
///////////////////////////////////
//constructor(props){
//  super(props)
//
//  this.state = {
//    date: new Date().toString()
//  }
//}
//
// const { date } = this.state;
// return <h1>Hello World and {name} it's {date} !</h1>

///////////////////////////////////
// 5. Reuse components
///////////////////////////////////
// a) Import Board
// b) Import Mario

///////////////////////////////////
// 6. Fixing props
///////////////////////////////////
//  <Mario position={{ x:100, y:100}} movement='stand'/>
//

///////////////////////////////////
// 7. Components are like states machines
///////////////////////////////////
//  Slides
//

///////////////////////////////////
// 8. Adding keyboard handling - idea 1
///////////////////////////////////
//
// componentWillMount(){
//   console.log('I am ready')
//   document.addEventListener('keydown', () => { console.log('goo')})
// }

///////////////////////////////////
// 9. Adding keyboard handling - idea 2 - component
///////////////////////////////////
//  <Hotkey/>
//



///////////////////////////////////
// Final code
///////////////////////////////////
//class ComponentMe extends Component {
//
//  constructor(props){
//    super(props)
//
//    this.state = {
//      date: new Date().toString()
//    }
//  }
//
//  render() {
//    const { name } = this.props;
//    const { date } = this.state;
//    return <h1>Hello World and {name} it's {date} !</h1>
//  }
//}
//
//export default class HelloWorld extends Component {
//
//// return <div>Hello World</div>
//
//  right(){
//    console.log('right!')
//  }
//
//  render() {
//    return <div>
//      <Bord/>
//      <Hotkey right={::this.right} />
//      <Mario position={{ x:100, y:100}} movement='stand'/>
//    </div>
//  }
//}