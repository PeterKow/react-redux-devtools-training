import React, { Component } from 'react'

export default class Mario extends Component {

  render() {

    const { startingPosition = 'right', position } = this.props
    const marioImg = "../img/mario/stand/" + startingPosition + ".gif"

    marioStyle.transform = 'matrix(1, 0, 0, 1, ' + position.x + ',' + position.y + ')';

    return <img src={marioImg} style={marioStyle} />
  }
}

Mario.propTypes = {
  startingPosition: React.PropTypes.string,
  position: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired
}

const marioStyle = {
      padding: 0,
      margin: 0,
      display: 'block',
      width: 45,
      height: 45,
      position: 'absolute',
      opacity: 1,
      transform: 'matrix(1, 0, 0, 1, 213.25, 591.5)',
      backgroundColor: 'transparent'
}