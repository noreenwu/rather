import { RECEIVE_USERS, RECORD_VOTE } from '../actions/users'
import { ADD_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  console.log("USERS REDUCER : action type: ", action.type);
  switch(action.type) {
    case RECEIVE_USERS :
      console.log("USERS REDUCER: RECEIVE_USER");
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION :
      const { users } = state
      const { qid, authedUser } = action
      console.log("add the question ID to the users questions array", qid, authedUser);
      console.log("ADD_QUESTION: users: ", users);
      return {
        ...state,        
        ...action.users

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