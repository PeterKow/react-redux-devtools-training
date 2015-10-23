import React, { Component } from 'react'
import Rx from 'rx'

let keydown;

export default class HotKey extends Component {

  // componentDidMount because it will be triggered only on the client (not on the server)
  componentDidMount(){
    const { right , left } = this.props

    if (right || left) {
      const keydownEvent = Rx.Observable.fromEvent(document, 'keydown')
        .map(function (e) {
          return e.keyCode;
        })

    keydown = keydownEvent.subscribe(triggerCallbacks)

    }

    function triggerCallbacks(e) {
      switch (e){
        case 39:
          right()
          break
        case 37:
          left()
          break
        default:
          break
      }
    }

  }

  componentWillUnmount(){
    keydown.dispose()
  }

  render(){
    return <div>{this.props.children}</div>
  }

}

HotKey.propTypes = {
  right: React.PropTypes.func,
  left: React.PropTypes.func
}