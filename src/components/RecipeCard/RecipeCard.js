import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'


const RecipeCard = ({name, id, image, ingredients, time}) => {

 const mappedIngredients = ingredients.map(ingredient => {
   return <p className='ingredient-pt'>{ingredient}</p>
 })

 const minutes = parseInt(time) / 60

  return(
      <article>
        <h3 className='recipe-name'>{name}</h3>
        <p>Time: {minutes} minutes</p>
        <img src={image} width='200' />
        <div className='ingredients-div'>
          Ingredients: {mappedIngredients}
        </div>
        <CardActions>
          <Button size="small" color="primary" href={`www.google.com`} target="_blank">
              More Info
          </Button>
        </CardActions>
      </article>
  )
}

export default RecipeCard