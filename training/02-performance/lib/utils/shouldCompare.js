var shallowCompare = require('react-addons-shallow-compare')
import Immutable from 'immutable'

export default function shouldCompare(nextProps, oldProps, nextState, oldState) {

  //console.log('---SHOULD---', shallowCompare(this, nextProps.someData, nextState))
  //return shallowCompare(this, nextProps.someData, nextState);

  if(Immutable.is(nextProps.someData, oldProps.someData)) {
  //if(nextProps.someData.get('clicks') === oldProps.someData.get('clicks')) {
    //console.log('no rerender')
    return false
  }
  //console.log('yes rerender')
  return true

}