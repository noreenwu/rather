import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, RECORD_VOTE } from '../actions/questions'

export default function users (state = {}, action) {
  let users = null
  let user = null


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
      users = state
      user = users[authedUser]
      user.questions.push(qid);   // this adds the new question to the user's created questions in the state
      return {
        ...state,
      }
    case RECORD_VOTE : 
      console.log("users reducer RECORD_VOTE action", action.answer, action.authedUser, action.qid);
      
      users = state
      user = users[action.authedUser] 
     // const newanswers = user.answers
      console.log("users reducer RECORD_VOTE", user.answers);
      user.answers[action.qid] = action.answer;
      
      return {
        ...state,
        	
      }
    default :
      return state
  }
}