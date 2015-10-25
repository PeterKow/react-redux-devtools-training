import React, { Component } from 'react'

export default function Board (){
  return <div>
            <div width="766" height="936" style={skyStyle}/>
            <div style={grassStyle}/>
         </div>

}

const skyStyle = {
  background: '#99FFFF',
  padding: 0,
  margin: 0,
  width: 766,
  height: 130,
  display: 'block',
  position: 'absolute'
}
const grassStyle = {
  background: '#009933',
  padding: 0,
  marginTop: 130,
  width: 766,
  height: 50,
  display: 'block',
  position: 'absolute'
}