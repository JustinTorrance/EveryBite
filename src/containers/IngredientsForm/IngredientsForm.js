import React, { Component } from 'react'

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

  render() {
    const { ingredient1, ingredient2, ingredient3, ingredient4, ingredient5 } = this.state
    return(
      <form className='ingredients-form'>
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
      </form>
    )
  }
}

export default IngredientsForm