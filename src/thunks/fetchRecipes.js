const API_KEY = `${process.env.REACT_APP_API_KEY}`
const APP_ID = `${process.env.REACT_APP_APP_ID}`

export const fetchRecipes = (ingredients) => {
  return async (dispatch) => {
    try {
      const mappedIngredients = ingredients.map(ingredient => {
        return `&allowedIngredient[]=${ingredient}`
      })
      const newIngredients = mappedIngredients.join('')
      const url = `http://api.yummly.com/v1/api/recipes?_app_id=${APP_ID}&_app_key=${API_KEY}${newIngredients}`
      console.log(url)
      const response = await fetch(url)
      // if (!response.ok) {
      //   console.log(error)
      // } else {
        const data = await response.json()
        console.log(data)
      // }
    } catch(error) {
      console.log(error)
    }
  }
}