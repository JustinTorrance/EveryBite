import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import shortid from 'shortid'

export class CardContainer extends Component {
  
  render() {
    
    let displayCards = this.props.recipes.map(recipe => {
      return <RecipeCard {...recipe} key={shortid.generate()} />
     })
    
    return(
      <div className='card-container'>
        {displayCards}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(CardContainer)