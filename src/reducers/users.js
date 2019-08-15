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
      const { qid, authedUser } = action
      const users = state     
      const user = users[authedUser]      
      user.questions.push(qid);   // this adds the new question to the user's created questions in the state
      return {
        ...state,
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