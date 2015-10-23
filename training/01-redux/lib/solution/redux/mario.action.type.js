import KeyMirror from 'keymirror'

const marioActionTypes = KeyMirror({
  'GO_RIGHT': null,
  'GO_LEFT': null
})

Object.freeze(marioActionTypes)

export default marioActionTypes