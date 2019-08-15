import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, RECORD_VOTE } from '../actions/questions'

export default function users (state = {}, action) {
  let users = state
  let user

  console.log("USERS REDUCER : action type: ", action.type);
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION :
      
      const { qid, authedUser } = action
      // users = state
      user = users[authedUser]
      user.questions.push(qid);   // this adds the new question to the user's created questions in the state
      return {
        ...state,
      }
    case RECORD_VOTE :       
      // users = state
      user = users[action.authedUser] 
      user.answers[action.qid] = action.answer; // add answered question's id and the user's answer 
      											//    to the authed user's answers object
      
      return {
        ...state,        	
      }
    default :
      return state
  }
}