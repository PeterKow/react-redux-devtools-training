import Immutable from 'immutable'

function compare(objA, objB) {
  //
  //let newProp = takeMe(nextProps, Root1.triggerRerender)
  //let oldProp = takeMe(instance.props, Root1.triggerRerender)

  // Compare object by ref
  if (objA === objB) {
    return true;
  }

  // ?!?@@?
  //if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
  //  return false;
  //}

  // Check length of objects
  if(Immutable.Map.isMap(objA) && Immutable.Map.isMap(objB)) {
    return compareImmutable(objA, objB)
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

//console.log('key', keysA)
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for(var key in objA) {
    console.log('---', key)
    //console.log('---', typeof objA[key])
    if (!bHasOwnProperty(key) || objA[key] !== objB[key]) {
      console.log('not match ', objA[key], objB[key])
      return false;
    }
  }
  return true

  //// Test for A's keys different from B.
  //var bHasOwnProperty = hasOwnProperty.bind(objB);
  //for (var i = 0; i < keysA.length; i++) {
  //  if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
  //    console.log('not match ', objA[keysA[i]], objB[keysA[i]])
  //    return false;
  //  }
  //}

  return false;

}

export default compare


function compareImmutable(objA, objB) {
  console.log('In Immutable!!!')
  return false
}