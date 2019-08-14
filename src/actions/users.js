// import { showLoading, hideLoading } from 'react-redux-loading'
// import ADD_QUESTION from '../actions/questions'

export const RECEIVE_USERS = 'RECEIVE_USERS'
//export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}


