import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux';

function HookCakeContainer() {
  const numberOfCake = useSelector(state => state.numberOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Hello state - {numberOfCake}</h1>
      <button onClick={() => dispatch(buyCake())}> click minus </button>
    </div>
  )
}

export default HookCakeContainer
