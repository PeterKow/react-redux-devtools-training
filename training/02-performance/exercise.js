import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import App from './lib/components/utils/root.js'
import Root1 from './lib/components/root1'
import { goLeft } from './lib/redux/mario.actions'
var shallowCompare = require('react-addons-shallow-compare');
import Node from './lib/components/node'
import { addClickToNode } from './lib/redux/tree/tree.actions'

@connect(({ treeReducer, marioReducer }) => ({ treeReducer, marioState: marioReducer }))
class HelloMario extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }


  render() {
    const { marioState, dispatch, treeReducer } = this.props
    const tree = treeReducer.toJS()
    return (
      <div>
        hello
        <Root1 someData={ marioState.get('data')} func={() => 'hello func'}></Root1>
        <button onClick={() => dispatch(goLeft())}>Go Left</button>
        <div style={{ display: 'flex', width: '100%', height: '10em', textAlign: 'center' }}>

          <Node someData={ tree.tree[1][0]}
                onClick={ () => dispatch(addClickToNode({ level: 1, nodeId: 0 })) }>
          </Node>
        </div>
        <div style={{ display: 'flex', width: '100%', height: '10em', textAlign: 'center' }}>

        </div>
      </div>
    )
  }
}


render( <App>
  <HelloMario/>
</App>, document.getElementById('app'))