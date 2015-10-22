import React, { Component } from 'react'
import Keymaster from 'keymaster'
import Rx from 'rx'

export default class HotKey extends Component {


  // componentDidMount because it will be triggered only on the client (not on the server)
  componentDidMount(){
    const { right, observable } = this.props

    var keydown = Rx.Observable.fromEvent(document, 'keydown')
      .map(function (e) {
        return e.keyCode;
      })

    observable(Rx.Observable.fromEvent(document, 'keydown'))
      //.throttle(100)
      //.distinctUntilChanged();

    var keydown2 = Rx.Observable.fromEvent(document, 'keydown')
      .map(function (e) {
        return e.keyCode;
      })
      .throttle(800)
      .delay(800)

    var subscription = keydown.subscribe(function (e) {
      console.log('key', e)
      switch (e){
        case 39:
          right(keydown2)
          break
        default:
          break

      }
    });



    return keydown2;
    var subscription2 = keydown2.subscribe(function (e) {
      console.log('key', e)
      switch (e){
        case 39:
          right2()
          break
        default:
          break

      }
    });

    if (!!right) {
      //Keymaster('right', right)
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