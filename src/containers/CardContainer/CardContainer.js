import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import shortid from 'shortid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export class CardContainer extends Component {
  
  render() {
    
    let displayCards = this.props.recipes.map(recipe => {
      return <RecipeCard {...recipe} key={shortid.generate()} />
     })
    
    return(
      <section className='card-section'>
        <div className='home-btn-div'>
          <Link to='/'>
            <Button type='submit' variant="contained" color="primary" className='home-btn'>Home</Button>
          </Link>
        </div>
        <div className='card-container'>
          {displayCards}
        </div>
        {!this.props.recipes.length && <h3 className='no-recipes'>There are no recipes to show</h3>}
      </section>
    )
  }
}

CardContainer.propTypes = {
  recipes: PropTypes.array.isRequired
}

export const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(CardContainer)