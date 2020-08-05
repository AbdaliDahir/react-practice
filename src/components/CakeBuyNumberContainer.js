import React, {useState} from 'react'
import {connect} from 'react-redux';
import {buyCake} from '../redux';

function CakeBuyNumberContainer(props) {
  const [number, setnumber] = useState(1);
  return (
    <div>
      <h2> Numbe rof cakes - {props.numberOfCake} </h2>
      <input type="text" value={number} onChange={e => setnumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}> buy {number} cake </button>
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
    buyCake: number => dispatch(buyCake(number))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeBuyNumberContainer)
