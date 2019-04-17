import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const RecipeCard = ({name, id, image, ingredients, time}) => {

 const mappedIngredients = ingredients.map(ingredient => {
   return <p className='ingredient-p' key={shortid.generate()}>{ingredient}</p>
 })

 const minutes = parseInt(time) / 60

  return(
      <article className='card'>
        <h3 className='recipe-name'>{name}</h3>
        <p className='time-p'>Time: {minutes} minutes</p>
        <img src={image} className='img' alt={`${name}`} />
        <div className='ingredients-div'>
          <span className='ingredient-label'>Ingredients:</span> {mappedIngredients}
        </div>
        <div className='info-btn'>
          <CardActions>
            <Button size="small" color="primary" href={`https://www.yummly.com/recipe/${id}`} target="_blank">
                More Info
            </Button>
          </CardActions>
        </div>
      </article>
  )
}

RecipeCard.propTypes = {
  name: PropTypes.string,
  time: PropTypes.number,
  id: PropTypes.string,
  image: PropTypes.string,
  ingredients: PropTypes.array
}

export default RecipeCard