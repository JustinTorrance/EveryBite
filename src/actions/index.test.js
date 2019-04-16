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
})