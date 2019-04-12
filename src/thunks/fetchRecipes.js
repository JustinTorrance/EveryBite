const API_KEY = `${process.env.REACT_APP_API_KEY}`
const APP_ID = `${process.env.REACT_APP_APP_ID}`

export const fetchRecipes = async (ingredients) => {
  try {
    //map over ingredients
    //return=[]ingredient
    const url = `http://api.yummly.com/v1/api/recipes?_app_id=${APP_ID}&_app_key=${API_KEY}&allowedIngredient${mappedIngredients}`
    const response = await fetch(url)
    if (!response.ok) {
      console.log(error)
    } else {
      const data = await response.json()
      //dispatch action here
    }
  } catch(error) {
    console.log(error)
  }
}