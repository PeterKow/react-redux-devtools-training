import React, { Component } from 'react'
var shallowCompare = require('react-addons-shallow-compare');
import SubNode from './subNode'
import shouldCompare from './../utils/shouldCompare'

export default class Node extends Component {

  //shouldComponentUpdate(nextProps, nextState) {
  //  return shouldCompare(nextProps, this.props, nextState, this.state)
  //}

  componentDidUpdate() {
    console.log('update')
    //this.setState({ x: 1 })
  }

  render() {
    console.log('rerender')
    const { someData, children, onClick, onSubClick, onSubSubClick } = this.props
    return (
      <div style={ style }>
        <div style={{ width: '90%' }}>
        { someData.get('clicks') }
        <button onClick={ onClick }>Add node</button>
        { children }
        <SubNode
                 someData={ someData.get('subNode') }
                 onClick={ onSubClick }
                 onSubSubClick={ onSubSubClick }>

        </SubNode>
        </div>
      </div>
    )
  }
}

Node.propTypes = {
  someData: React.PropTypes.object,
  onClick: React.PropTypes.func.isRequired,
  onSubClick: React.PropTypes.func.isRequired,
  onSubSubClick: React.PropTypes.func.isRequired,
}


const style = {
  background: 'red',
  width: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'blue',
  borderStyle: 'dashed',
  borderWidth: 'thin',
}