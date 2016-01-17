import React, { Component } from 'react'
var shallowCompare = require('react-addons-shallow-compare');
import SubSubNode from './subSubNode'
import shouldCompare from './../utils/shouldCompare'

export default class SubNode extends Component {

  //shouldComponentUpdate(nextProps, nextState) {
  //  return shouldCompare(nextProps, this.props, nextState, this.state)
  //}

  componentDidUpdate() {
    console.log('update sub  node')
  }

  render() {
    //console.log('rerender')
    const { someData, children, onClick, onSubSubClick } = this.props
    return (
      <div style={ style }>
        <div style={{ width: '90%' }}>
        { someData.clicks }
        <button onClick={ onClick }>Add sub</button>
        { children }
        <SubSubNode
          someData={ someData.subSubNode }
          onClick = { onSubSubClick }>
        </SubSubNode>
        </div>
      </div>
    )
  }
}

SubNode.propTypes = {
  someData: React.PropTypes.object,
  onClick: React.PropTypes.func.isRequired,
  onSubSubClick: React.PropTypes.func.isRequired,
}


const style = {
  background: 'yellow',
  width: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'blue',
  borderStyle: 'dashed',
  borderWidth: 'thin',
  height: '70%',
  margin: 'auto',
}