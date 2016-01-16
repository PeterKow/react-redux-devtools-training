import React, { Component } from 'react'

export default class Node extends Component {

  componentDidUpdate() {
    console.log('update')
  }

  render() {
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