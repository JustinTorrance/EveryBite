export const storeRecipes = (recipes) => ({
  type: 'STORE_RECIPES',
  recipes
})

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  isLoading: boolean
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})