import React, { Component } from 'react'

export default class Mario extends Component {

  render() {

    return (<img src='../img/turtle/walk/left.png' style={turtleStyle} />)
  }
}

const turtleStyle = {
  padding: 0,
  margin: 0,
  display: 'block',
  width: 40,
  height: 45,
  position: 'absolute',
  opacity: 1,
  transform: 'matrix(1, 0, 0, 1, 400, 51)',
  backgroundColor: 'transparent'
}