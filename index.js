const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_PIZA = 'BUY_PIZA';
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'FIRST ACTION'
  }
}
function BuyPiza() {
  return {
    type: BUY_PIZA,
    info: 'FIRST Piza'
  }
}
const CakeStore = {
  numberOfCake: 10
}
const PizaStore = {
  numberOfPiza: 10
}
const Cakereducer = (state = CakeStore, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numberOfCake: state.numberOfCake - 1
    }
    default : return state
  }
}
const Pizareducer = (state = PizaStore, action) => {
  switch (action.type) {
    case BUY_PIZA: return {
      ...state,
      numberOfPiza: state.numberOfPiza - 1
    }
    default : return state
  }
}

const RootReducers = combineReducers({
  cake: Cakereducer,
  piza: Pizareducer
})
const store = createStore(RootReducers);
console.log('INitial Staet', store.getState());
const unsubscribe = store.subscribe(() => {console.log('Updated Store', store.getState())})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(BuyPiza())
store.dispatch(BuyPiza())
unsubscribe();

