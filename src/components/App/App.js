import React, { Component } from 'react'
import IngredientsForm from '../../containers/IngredientsForm/IngredientsForm'
import CardContainer from '../../containers/CardContainer/CardContainer'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loading } from '../Loading/Loading'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'>Every<span>Bite</span></h1>
        { this.props.isLoading && <Loading /> }
        <Switch>
          <Route exact path='/' component={IngredientsForm} />
          <Route exact path='/recipes' component={CardContainer} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(App)
