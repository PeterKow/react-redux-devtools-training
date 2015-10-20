import React, { Component } from 'react'
import Keymaster from 'keymaster'

export default class Mario extends Component {

  constructor(props){
    super(props)

    this.state = {
      x: 100,
      y: 100
    }
  }

  componentDidMount(){
    Keymaster('right', () => {
      this.setState({ x: this.state.x + 1})
    })
  }

  componentWillUnmount(){
    key.unbind('right');
  }

  render() {

    const { startingPosition = 'right', position } = this.props
    const marioImg = "../img/mario/stand/" + startingPosition + ".gif"
    marioStyle.transform = 'matrix(1, 0, 0, 1, ' + this.state.x + ',' + this.state.y + ')';

    // while we mutating the styles we need to cloneElement beforehand
    return React.cloneElement(<img src={marioImg} style={marioStyle} />, { style: { transform: marioStyle.transform }})
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