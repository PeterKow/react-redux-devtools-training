import React, { Component } from 'react'
import { Provider, connect } from 'react-redux';
import configureStore from '../../utils/configureStore.js';
import DevTools from './devTools.js'

let store = configureStore();

@connect(application =>  application)
class Root extends React.Component {
  static propTypes = {
    marioReducer: React.PropTypes.object.isRequired,
  };

  render () {
    const { children } = this.props

    return (
      <div>
        { children }
        <DevTools key='dev-tools'/>
      </div>
    )
  }
}

export default function App({ children }){
  return  <Provider store={store}>
            <Root>
              { children }
            </Root>
          </Provider>
}