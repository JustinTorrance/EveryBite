import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../thunks/fetchRecipes'


export class IngredientsForm extends Component {
  constructor() {
    super()
    this.state = {
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
      ingredient4: '',
      ingredient5: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const ingredients = Object.values(this.state).filter(ingredient => {
      if (ingredient !== '') {
        return ingredient
      }
    })
    this.props.fetchRecipes(ingredients)
  }

  render() {
    const { ingredient1, ingredient2, ingredient3, ingredient4, ingredient5 } = this.state
    return(
      <section className='ingredient-input-section'>
        <div className='instructions'>
          <p>It's easy to begin!</p>
          <p>Simply enter the ingredients you have on hand,</p>
          <p>and we'll find recipes that include all of your ingredients.</p>
        </div>
        <form className='ingredients-form' onSubmit={(e) => this.handleSubmit(e)}>
          <input 
            value={ingredient1}
            name='ingredient1'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <input 
            value={ingredient2}
            name='ingredient2'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <input 
            value={ingredient3}
            name='ingredient3'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <input 
            value={ingredient4}
            name='ingredient4'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <input 
            value={ingredient5}
            name='ingredient5'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <button type='submit'>Find Recipes</button>
        </form>
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (ingredients) => dispatch(fetchRecipes(ingredients))
})

export default connect (null, mapDispatchToProps)(IngredientsForm)