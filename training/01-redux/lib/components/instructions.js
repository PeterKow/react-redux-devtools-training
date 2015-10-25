import React, { Component } from 'react'

export default class Instructions extends Component{
  render(){
    return       <div style={instructionsStyle}>
      <h2>Instructions</h2>
      <ul style={{listStyleType: 'decimal'}}>
        <li>Investigate "./lib/redux" folder and get familiar with actions and reducers</li>
        <li>Implement 'stand' action</li>
        <li>Implement 'left' action</li>
        <li>Refactor - Group fundamental actions like "goRight" and "stand" into "moveRight" eg. './lib/solution/redux/marioHigher.action.js'</li>
        <li>Refactor - pass dispatch actions directly to HotKey component</li>
      </ul>
    </div>
  }
}
const instructionsStyle = {
  paddingTop: 180,
  margin: 0,
  width: 766,
  height: 130,
  display: 'block',
  position: 'absolute'
}