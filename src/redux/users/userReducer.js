import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'

const initialState = {
  loading: false,
  users: [],
  errors: ''
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errors: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        errors: action.payload
      }
    default: return state
  }
}

export default reducer;