export const recipeCleaner = (data) => {
  return data.matches.map(recipe => {
    const largerImage = recipe.imageUrlsBySize[90].replace('=s90', '=s800')
    return {
      ingredients: recipe.ingredients,
      id: recipe.id,
      name: recipe.recipeName,
      time: recipe.totalTimeInSeconds,
      image: largerImage
    }
  })
}