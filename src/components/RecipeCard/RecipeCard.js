import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'


const RecipeCard = ({name, id, image, ingredients, time}) => {

 const mappedIngredients = ingredients.map(ingredient => {
   return <p className='ingredient-p'>{ingredient}</p>
 })

 const minutes = parseInt(time) / 60

  return(
      <article className='card'>
        <h3 className='recipe-name'>{name}</h3>
        <p>Time: {minutes} minutes</p>
        <img src={image} className='img' />
        <div className='ingredients-div'>
          <span className='ingredient-label'>Ingredients:</span> {mappedIngredients}
        </div>
        <div className='info-btn'>
          <CardActions>
            <Button size="small" color="primary" href={`www.google.com`} target="_blank">
                More Info
            </Button>
          </CardActions>
        </div>
      </article>
  )
}

export default RecipeCard