import React, { Component } from 'react'
var shallowCompare = require('react-addons-shallow-compare');

export default class Node extends Component {
  //
  //shouldComponentUpdate(nextProps, nextState) {
  //  if(nextProps.someData.clicks === this.props.someData.clicks){
  //    console.log('no rerender')
  //    return false
  //  }
  //  console.log('yes rerender')
  //  return true
  //
  //  //return shallowCompare(this, nextProps, nextState);
  //}

  componentDidUpdate() {
    console.log('update')
    //this.setState({ x: 1 })
  }

  render() {
    console.log('rerender')
    const { someData, children, onClick } = this.props
    return (
      <div style={ style }>
        { someData.clicks }
        <button onClick={ onClick }>Add</button>
        { children }
      </div>
    )
  }
}

Node.propTypes = {
  someData: React.PropTypes.object,
  onClick: React.PropTypes.func.isRequired,
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