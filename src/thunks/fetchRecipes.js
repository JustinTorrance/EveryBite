import { storeRecipes } from '../actions'
import { recipeCleaner } from '../cleaner'
import { isLoading } from '../actions'
const API_KEY = `${process.env.REACT_APP_API_KEY}`
const APP_ID = `${process.env.REACT_APP_APP_ID}`

export const fetchRecipes = (ingredients) => {
  return async (dispatch) => {
    try {
      const mappedIngredients = ingredients.map(ingredient => {
        return `&allowedIngredient[]=${ingredient}`
      })
      const queryIngredients = mappedIngredients.join('')
      const url = `http://api.yummly.com/v1/api/recipes?_app_id=${APP_ID}&_app_key=${API_KEY}${queryIngredients}`
      dispatch(isLoading(true))
      const response = await fetch(url)
      const data = await response.json()
      const recipes = recipeCleaner(data)
      console.log(recipes)
      dispatch(storeRecipes(recipes))
      dispatch(isLoading(false))
    } catch(error) {
      console.log(error)
    }
  }
}