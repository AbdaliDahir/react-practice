import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import pizzaReducer from './pizza/pizzaReducer'
import reducer from './users/userReducer'

const RootReducers = combineReducers({
  cake: cakeReducer,
  pizza: pizzaReducer,
  users: reducer
})

export default RootReducers;