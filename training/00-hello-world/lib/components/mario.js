import React, { Component } from 'react'

export default class Mario extends Component {

  render() {

    const { direction = 'right', position, movement } = this.props
    const marioImg = "../img/mario/" + movement + "/" + direction + ".gif"
    marioStyle.transform = 'matrix(1, 0, 0, 1, ' + position.x + ',' + position.y + ')';

    // while we mutating the styles we need to cloneElement beforehand
    return React.cloneElement(<img src={marioImg} style={marioStyle} />, { style: { transform: marioStyle.transform }})
  }
}

Mario.propTypes = {
  //right, left
  direction: React.PropTypes.string,
  position: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired,
  // stand, walk, jump
  movement: React.PropTypes.string.isRequired
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