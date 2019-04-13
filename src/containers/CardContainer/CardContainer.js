import React, { Component } from 'react'
import {uid} from 'react-uid'
import { connect } from 'react-redux'
// import Card from ''

export class CardContainer extends Component {

  render() {

    const displayCards = this.props.recipes.map(recipe => {
      <Card {...recipe} key={uid()} />
    })

    return(
      <div>
        {displayCards}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(CardContainer)