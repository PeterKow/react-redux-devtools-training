import React, { Component } from 'react'
import { Provider, connect } from 'react-redux';
import configureStore from '../../utils/configureStore.js';
import DevTools from './devTools.js'
import HelloMario from '../../../exercise.js'

let store = configureStore();

@connect(application =>  application)
class Root extends React.Component {
  static propTypes = {
    marioReducer: React.PropTypes.object.isRequired,
  };

  render () {
    return (
      <div>
        <HelloMario/>
        <DevTools key='dev-tools'/>
      </div>
    )
  }
}

export default function App(){
  return  <Provider store={store}>
            <Root/>
          </Provider>
}