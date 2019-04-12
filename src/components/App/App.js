import React, { Component } from 'react'
import IngredientsForm from '../../containers/IngredientsForm/IngredientsForm'
const API_KEY = `${process.env.REACT_APP_API_KEY}`
const APP_ID = `${process.env.REACT_APP_APP_ID}`

class App extends Component {
  render() {
    return (
      <div className="App">
        <IngredientsForm />
      </div>
    );
  }
}

export default App
