var shallowCompare = require('react-addons-shallow-compare');

export default function shouldCompare(nextProps, oldProps, nextState, oldState) {

  //console.log('---SHOULD---', shallowCompare(this, nextProps.someData, nextState))
  //return shallowCompare(this, nextProps.someData, nextState);

  if(nextProps.someData.clicks === oldProps.someData.clicks) {
    //console.log('no rerender')
    return false
  }
  //console.log('yes rerender')
  return true

}