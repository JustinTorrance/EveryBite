import React, { Component } from 'react'
import IngredientsForm from '../IngredientsForm/IngredientsForm'
import CardContainer from '../CardContainer/CardContainer'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loading } from '../../components/Loading/Loading'
import { BadPath } from '../../components/BadPath/BadPath'
import PropTypes from 'prop-types'

export class App extends Component {
  render() {
    const { isLoading, error } = this.props
    return (
      <div className="App">
        <h1 className='title'>Every<span>Bite</span></h1>
        { isLoading && <Loading /> }
        { error && <h3 className='error'>{error}</h3>}
        <Switch>
          <Route exact path='/' component={IngredientsForm} />
          <Route exact path='/recipes' component={CardContainer} />
          <Route component={BadPath} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})

export default connect(mapStateToProps)(App)
