import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyPizza } from '../redux'

function ItemContainer(props) {
  return (
    <div>
      <h2> Numbe rof item - {props.item} </h2>
      <button onClick={props.buyItem}></button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numberOfCake : state.pizza.numberOfPizza
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyPizza());
  return {
    buyItem: itemDispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
