import React from 'react'

const Card = ({name, id, image, ingredients, time}) => {

 const mappedIngredients = ingredients.map(ingredient => {
   return <p>{ingredient}</p>
 })

 const minutes = parseInt(time) / 60

  return(
    <article>
      <h3 className='recipe-name'>{name}</h3>
      <img className='recipe-img' src={image} width='300' />
      <p>Time: {minutes} minutes</p>
      <div className='ingredients-div'>
        Ingredients: {mappedIngredients}
      </div>
    </article>
  )
}

export default Card