import { RECEIVE_USERS, ADD_QUESTION, RECORD_VOTE } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION :
      return {
        ...state
      }
    case RECORD_VOTE : 
      console.log("users reducer RECORD_VOTE");
      return {
        ...state
      }
    default :
      return state
  }
}