import React from 'react'
import {connect} from 'react-redux';
import {buyCake} from '../redux';

function CakeContainer(props) {
  return (
    <div>
      <h2> Numbe rof cakes - {props.numberOfCake} </h2>
      <button onClick={props.buyCake}> buy cake </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numberOfCake: state.cake.numberOfCake 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
