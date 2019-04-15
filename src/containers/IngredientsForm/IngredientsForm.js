import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../thunks/fetchRecipes'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'


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
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { history } = this.props
    history.push('/recipes')
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
        <Typography variant="title" color="inherit">
          <div className='instructions'>
            <p>It's easy to begin!</p>
            <p>Simply enter the ingredients you have on hand</p>
            <p>We'll find recipes that include all of your ingredients.</p>
          </div>
        </Typography>
        <form className='ingredients-form' onSubmit={(e) => this.handleSubmit(e)}>
          <Input 
            value={ingredient1}
            name='ingredient1'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <Input 
            value={ingredient2}
            name='ingredient2'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <Input 
            value={ingredient3}
            name='ingredient3'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <Input 
            value={ingredient4}
            name='ingredient4'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <Input 
            value={ingredient5}
            name='ingredient5'
            onChange={this.handleChange}
            placeholder='enter an ingredient'
          />
          <div className='submit-btn'>
            <Button type='submit' variant="contained" color="primary">Find Recipes</Button>
          </div>
        </form>
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (ingredients) => dispatch(fetchRecipes(ingredients))
})

export default withRouter(connect (null, mapDispatchToProps)(IngredientsForm))