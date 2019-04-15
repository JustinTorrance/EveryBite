import React, { Component } from 'react'
import IngredientsForm from '../IngredientsForm/IngredientsForm'
import CardContainer from '../CardContainer/CardContainer'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loading } from '../../components/Loading/Loading'
import PropTypes from 'prop-types'

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

App.propTypes = {
  isLoading: PropTypes.bool
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading.isRequired
})

export default connect(mapStateToProps)(App)
