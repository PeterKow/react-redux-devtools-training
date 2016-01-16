import KeyMirror from 'keymirror'

const marioActionTypes = KeyMirror({
  'ADD_CLICK': null,
  'ADD_SUBCLICK': null,
  'ADD_SUB_SUBCLICK': null,
})

Object.freeze(marioActionTypes)

export default marioActionTypes