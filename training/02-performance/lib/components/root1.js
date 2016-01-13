import React, { Component } from 'react'
var shallowCompare = require('react-addons-shallow-compare');

export default class Root1 extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Root1 updated')
  }

  render() {
    const { someData } = this.props
    return (
      <div>
        New { someData }
      </div>
    )
  }
}

Root1.propTypes = {
  data: React.PropTypes.string
}
