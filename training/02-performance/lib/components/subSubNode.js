import React, { Component } from 'react'
var shallowCompare = require('react-addons-shallow-compare');
import shouldCompare from './../utils/shouldCompare'

export default class SubSubNode extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shouldCompare(nextProps, this.props, nextState, this.state)
  }

  componentDidUpdate() {
    console.log('update sub sub node')
    //this.setState({ x: 1 })
  }

  render() {
    //console.log('rerender')
    const { someData, children, onClick } = this.props
    return (
      <div style={ style }>
        { someData.clicks }
        <button onClick={ onClick }>Add sub</button>
        { children }
      </div>
    )
  }
}

SubSubNode.propTypes = {
  someData: React.PropTypes.object,
  onClick: React.PropTypes.func.isRequired,
}


const style = {
  background: 'burlywood',
  width: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'blue',
  borderStyle: 'dashed',
  borderWidth: 'thin',
  height: '50%',
  margin: 'auto',
}