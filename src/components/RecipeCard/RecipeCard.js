import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
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