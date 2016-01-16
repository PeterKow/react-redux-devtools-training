import { expect } from 'chai'
import treeReducer from '../../../training/02-performance/lib/redux/tree/tree.reducer.js'
import Immutable from 'immutable'

describe.only('treeReducer', () => {

  it('should exist', () => {
    expect(treeReducer).to.be.exist
  })

  it('ADD_CLICK should add click to selected node', () => {
    const initialState = Immutable.fromJS({
      tree: [
        [{ clicks: 1 }],
        [{ clicks: 2 }, { clicks: 3 }],
      ]
    })
    const newState = treeReducer(initialState, { type: 'ADD_CLICK', payload: { level: 1, nodeId: 0 }}).toJS()
    const expectedState = {
      tree: [
        [{ clicks: 1 }],
        [{ clicks: 3 }, { clicks: 3 }],
      ]
    }
    expect(newState).to.be.deep.equal(expectedState)
  })
})