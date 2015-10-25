import React, { Component } from 'react'

export default class Instructions extends Component{
  render(){
    return       <div style={instructionsStyle}>
                    <h2>Instructions</h2>
                    <ul style={{listStyleType: 'decimal'}}>
                      <li>Get familiar with ./lib/components/mario.js and propTypes you can pass</li>
                      <li>Add mario component to render function</li>
                      <li>By passing props to Mario component display Mario walking in left direction</li>
                      <li>Implement state via constructor eg. Slides</li>
                      <li>Implement right and left function to move mario via arrow keys</li>
                      <li>Does Mario walk right and left?</li>
                      <li>Does Mario stop walking?</li>
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