
const ORDER_CUP_CAKE = 'ORDER_CUP_CAKE';

// craete Action 
function order_cake() {
  return {
    type: ORDER_CUP_CAKE,
    qnt: 1
  }
}

// state
const initialState = {
  number_cupCakes: 20,
  number_dessert: 10
}

// create reducer
const statereducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CUP_CAKE:
      return {
        ...state,
        number_cupCakes: state.number_cupCakes - 1,
      }
    default:
      return state
  }
}
