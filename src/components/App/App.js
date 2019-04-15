import React, { Component } from 'react'
import IngredientsForm from '../../containers/IngredientsForm/IngredientsForm'
import CardContainer from '../../containers/CardContainer/CardContainer'
import { Route, Switch } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'>Every<span>Bite</span></h1>

        {/* <div className='input-container'>
            <IngredientsForm />
        </div>
        <div className='recipe-container'>
            <CardContainer />
        </div> */}
        <Switch>
          <Route exact path='/' component={IngredientsForm} />
          <Route exact path='/recipes' component={CardContainer} />
        </Switch>
      </div>
    );
  }
}

export default App
