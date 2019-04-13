import React, { Component } from 'react'
import IngredientsForm from '../../containers/IngredientsForm/IngredientsForm'
import CardContainer from '../../containers/CardContainer/CardContainer'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <IngredientsForm />
        <CardContainer />
      </div>
    );
  }
}

export default App
