import React, { Component } from 'react'
import Keymaster from 'keymaster'
import Rx from 'rx'

let keydown;

export default class HotKey extends Component {

  // componentDidMount because it will be triggered only on the client (not on the server)
  componentDidMount(){
    const { right,  } = this.props
    // rx.DOM.keydown(documel)
    const keydownEvent = Rx.Observable.fromEvent(document, 'keydown')
      .map(function (e) {
        return e.keyCode;
      })

    keydown = keydownEvent.subscribe(doTheLogic)

    function doTheLogic(e) {
      console.log('key', e)
      switch (e){
        case 39:
          right()
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
  right: React.PropTypes.func
}