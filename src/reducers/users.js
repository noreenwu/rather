import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, RECORD_VOTE } from '../actions/questions'

export default function users (state = {}, action) {

  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION :      
      const { qid } = action
      
      let newQuestions = state[action.authedUser].questions.slice();
      newQuestions.push(qid);
      
      return {
        ...state,
        [action.authedUser] : {
          ...state[action.authedUser],
          questions: newQuestions
        }       
      }
    case RECORD_VOTE :            
      let newAnswers = Object.assign({}, state[action.authedUser].answers, {[action.qid]: action.answer});
      return {
        ...state,     
        [action.authedUser] : {
           ...state[action.authedUser],  
           answers: newAnswers       
          }        
      }
    default :
      return state
  }
}