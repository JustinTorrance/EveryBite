export const recipesReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_RECIPES':
      return action.recipes
    default:
      return state
  }
}