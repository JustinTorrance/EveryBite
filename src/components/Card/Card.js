import React from 'react'

const Card = ({name, id, image, ingredients}) => {

 const mappedIngredients = ingredients.map(ingredient => {
   return <p>{ingredient}</p>
 })

  return(
    <article>
      <h3 className='recipe-name'>{name}</h3>
      <div className='ingredients-div'>
        {mappedIngredients}
      </div>
      <img className='recipe-img' src={image} width='300' />
    </article>
  )
}

export default Card