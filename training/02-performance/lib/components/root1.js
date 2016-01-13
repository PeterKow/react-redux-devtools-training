import React, { Component } from 'react'
var shallowCompare = require('react-addons-shallow-compare');
import Immutable from 'immutable'

export default class Root1 extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    //let newProp = take(nextProps)
    //let oldProp = take(this.props)
    //const data1 = this.props.someData.toJS()
    //const data2 = nextProps.someData.toJS()
    //
    //const imm1 = new Immutable.Map(data1)
    //const imm2 = new Immutable.Map(data2)
    //console.log('immm', Immutable.is(imm1,imm2))

    console.log('should update???')

    let newProp = takeMe(nextProps, Root1.triggerRerender)
    let oldProp = takeMe(this.props, Root1.triggerRerender)
    //console.log('new', newProp)
    //console.log('old', oldProp)
    //console.log('nextState', nextState)
    let me = {
      props: oldProp,
      state: nextState
    }

    return shallowCompare(me, newProp, nextState)
    if (Immutable.is(this.props.someData, nextProps.someData)) {
       console.log('return false')
      return false
     }
  }

  componentDidUpdate() {
    console.log('Root1 updated')
  }

  render() {
    const { someData } = this.props
    return (
      <div>
        New { someData.get('my') }
      </div>
    )
  }
}

Root1.propTypes = {
  data: React.PropTypes.object,
  func: React.PropTypes.func,
  obj:  React.PropTypes.object,
}

Root1.triggerRerender = {
  func: 'no',
  data: 'imm',
  obj: 'obj'
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

nextState

function compare(objA, objB){

  let newProp = takeMe(nextProps, Root1.triggerRerender)
  let oldProp = takeMe(instance.props, Root1.triggerRerender)

  // Compare object by ref
  if (objA === objB) {
    return true;
  }

  // ?!?@@?
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  // Check length
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }


  // Test for A's keys different from B.
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      console.log('not match ', objA[keysA[i]], objB[keysA[i]])
      return false;
    }
  }

  return true;






}