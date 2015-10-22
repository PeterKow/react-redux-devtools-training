import React, { Component } from 'react'
import Keymaster from 'keymaster'

export default class HotKey extends Component {


  // componentDidMount because it will be triggered only on the client (not on the server)
  componentDidMount(){
    const { right } = this.props

    if (!!right) {
      Keymaster('right', right)
    }
  }

  componentWillUnmount(){
    key.unbind('right');
  }

  render(){
    return <div>{this.props.children}</div>
  }

}

HotKey.propTypes = {
  right: React.PropTypes.func
}