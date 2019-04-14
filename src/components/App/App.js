import React, { Component } from 'react'
import IngredientsForm from '../../containers/IngredientsForm/IngredientsForm'
import CardContainer from '../../containers/CardContainer/CardContainer'
import Typography from '@material-ui/core/Typography'

export class App extends Component {
  render() {
    return (
      <div className="App">
    
          <div className='input-container'>
            <Typography variant="title" color="inherit">
              <IngredientsForm />
            </Typography>
          </div>
          <div className='recipe-container'>
            <Typography variant="title" color="inherit">
              <CardContainer />
            </Typography>
          </div>
      </div>
    );
  }
}

export default App
