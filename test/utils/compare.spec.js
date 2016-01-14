import { expect } from 'chai'
import compare from '../../training/02-performance/lib/utils/compare'
import Immutable from 'immutable'

describe('Compare', () =>{

  it('should exist', () => {
    expect(compare).to.be.exist
  })

  it('should return true for the same objects', () => {
    const obj1 = {
      my: 'data',
    }
    expect(compare(obj1, obj1)).to.be.equal(true)
  })

  it('should return false for different length of objects', () => {
    const obj1 = {
      my: 'data',
    }
    const obj2 = {
      my: 'data',
      my2: 'data',
    }
    expect(compare(obj1, obj2)).to.be.equal(false)
  })

  it('should return true for the same objects but different ref', () => {
    const obj1 = {
      my: 'data',
    }
    const obj2 = {
      my: 'data',
    }
    expect(compare(obj1, obj2)).to.be.equal(true)
  })

  it('should return false for objects with different key', () => {
    const obj1 = {
      my: 'data',
    }
    const obj2 = {
      my_key: 'data',
    }
    expect(compare(obj1, obj2)).to.be.equal(false)
  })

  it('should return false for objects with different value', () => {
    const obj1 = {
      my: 'data',
    }
    const obj2 = {
      my: 'data222',
    }
    expect(compare(obj1, obj2)).to.be.equal(false)
  })

  it('should return true for different nested objects but the same shallow object', () => {
    const  nested = {
      myNested: {
        mySecNested: 'obj1',
      }
    }
    const obj1 = {
      my: 'data',
      nested: nested
    }
    const obj2 = {
      my: 'data',
      nested: nested
    }
    obj2.nested.myNested.mySecNested = 'modifying second nested object '
    expect(compare(obj1, obj2)).to.be.equal(true)
  })

  describe.only('Immutable', () => {
    it('should return true the same Immutable objects', () => {
      const  nested = {
        myNested: {
          mySecNested: 'obj1',
        }
      }
      const jsObj1 = {
        my: 'data',
        nested: nested
      }
      const jsObj2 = {
        my: 'data',
        nested: nested
      }
      const obj1 = Immutable.fromJS(jsObj1)
      const obj2 = Immutable.fromJS(jsObj2)
      expect(compare(obj1, obj2)).to.be.equal(true)
    })
  })

})