import React from 'react'
import {connect} from 'react-redux';
import {buyPizza} from '../redux';

function PizzaContainer(props) {
  return (
    <div>
      <h2> Numbe rof Pizzas - {props.numberOfPizza} </h2>
      <button onClick={props.buyPizza}> buy Pizza </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numberOfPizza: state.pizza.numberOfPizza 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyPizza: () => dispatch(buyPizza())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer)
