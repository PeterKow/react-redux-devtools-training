import React, { Component } from 'react'
var shallowCompare = require('react-addons-shallow-compare');

export default class Root1 extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    //let newProp = take(nextProps)
    //let oldProp = take(this.props)
    let newProp = takeMe(nextProps, Root1.triggerRerender)
    let oldProp = takeMe(this.props, Root1.triggerRerender)
    //console.log('new', newProp)
    //console.log('old', oldProp)
    //console.log('nextState', nextState)
    let me = {
      props: oldProp,
      state: nextState
    }

    return shallowCompare(me, newProp, nextState);
  }

  componentDidUpdate() {
    console.log('Root1 updated')
  }

  render() {
    const { someData } = this.props
    return (
      <div>
        New { someData }
      </div>
    )
  }
}

Root1.propTypes = {
  data: React.PropTypes.string,
  func: React.PropTypes.func,
}

Root1.triggerRerender = {
  func: 'no'
}

function take(object) {
  let newProp = {}
  for (const prop in object) {
    if ( typeof  object[prop] === 'function') {
      //console.log('func', object[prop])
      }
    else {
      //console.log('assign', object[prop])
      newProp[prop] = object[prop]
    }
  }
  return newProp
}

function takeMe(object, triggerRerender) {
  let newProp = {}
  for (const prop in object) {
    if(triggerRerender[prop] !== 'no' ) {
      newProp[prop] = object[prop]
    }
  }
  return newProp
}