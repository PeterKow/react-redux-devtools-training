import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import App from './lib/components/utils/root.js'
import Root1 from './lib/components/root1'
import { goLeft } from './lib/redux/mario.actions'
var shallowCompare = require('react-addons-shallow-compare');

class HelloMario extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }


  render() {

    const { marioState, dispatch } = this.props
    return (
      <div>
        hello
        <Root1 someData={ marioState.get('direction') }></Root1>
        <button onClick={() => dispatch(goLeft())}>Go Left</button>
      </div>
    )
  }
}

function select(state){
  return {
    marioState: state.marioReducer
  }
}

const HelloMarioRedux = connect(select)(HelloMario)

render( <App>
  <HelloMarioRedux/>
</App>, document.getElementById('app'))