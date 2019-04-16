import { recipesReducer } from './recipesReducer'

describe('recipesReducer', () => {

  it('should return initial state', () => {
    const expected = []
    const result = recipesReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return an array of recipes', () => {
    const expected = [{name: 'curry'}]
    const action = {
      type: 'STORE_RECIPES',
      recipes: [{name: 'curry'}] 
    }
    const result = recipesReducer([], action)
    expect(result).toEqual(expected)
  })
})