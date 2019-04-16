import * as actions from './index'

describe('actions', () => {
  it('should return a type of STORE_RECIPES and an array of recipes', () => {
    const recipes = [{name: 'curry'}]
    const expected = {
      type: 'STORE_RECIPES',
      recipes
    }
    const result = actions.storeRecipes(recipes)
    expect(result).toEqual(expected)
  })

  it('should return a type of IS_LOADING and a boolean', () => {
    const expected = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const result = actions.isLoading(true)
    expect(result).toEqual(expected)
  })

  it('should return a type of HAS_ERRORED and an error message', () => {
    const expected = {
      type: 'HAS_ERRORED',
      message: 'Something went wrong'
    }
    const result = actions.hasErrored('Something went wrong')
    expect(result).toEqual(expected)
  })
})