const redux = require('redux');
const createStore = redux.createStore;
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  errors: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILLER = 'FETCH_USERS_FAILLER';

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST
  }
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

const fetchUsersFailler = (errors) => {
  return {
    type: fetchUsersFailler,
    payload: errors,
  }
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errors: ''
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: [],
        errors: action.payload
      }
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data.map(user => user.name)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers());