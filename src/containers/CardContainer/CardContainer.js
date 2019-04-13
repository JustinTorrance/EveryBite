import React, { Component } from 'react'
// import { uid } from 'uid'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
import shortid from 'shortid'

export class CardContainer extends Component {
  
  render() {
    
    let displayCards = this.props.recipes.map(recipe => {
      return <Card {...recipe} key={shortid.generate()} />
     })
    
    return(
      <div>
        {displayCards}
        CardContainer
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(CardContainer)