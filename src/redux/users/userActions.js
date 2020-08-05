import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from './userTypes'
import axios from 'axios';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchSuccessRequest(users))
      })
      .catch(errors => {
        // error.message is the error message
        dispatch(fetchFailureRequest(errors.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}
export const fetchSuccessRequest = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}
export const fetchFailureRequest = errors => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: errors
  }
}