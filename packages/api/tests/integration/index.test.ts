import { setupTest } from '../testUtils'

function sum(a, b) {
  return a + b
}

describe('initial test suite', () => {
  setupTest(this)

  describe('nested describe', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
    })
  
    test('adds 1 + 3 to equal 4', () => {
      expect(sum(1, 3)).toBe(4)
    })
  
    test('adds 1 + 4 to equal 5', () => {
      expect(sum(1, 4)).toBe(5)
    })
  })

  describe('second nested describe', () => {

    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
    })
  
    test('adds 1 + 3 to equal 4', () => {
      expect(sum(1, 3)).toBe(4)
    })
  
    test('adds 1 + 4 to equal 5', () => {
      expect(sum(1, 4)).toBe(5)
    })
  })
})
