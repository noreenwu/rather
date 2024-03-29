import { RECEIVE_QUESTIONS, ADD_QUESTION, RECORD_VOTE } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id] : action.question
      
      }    
    case RECORD_VOTE:
      
      return {
        ...state,
        [action.qid] : {
          ...state[action.qid],
          [action.answer] : {
            ...state[action.answer],

            votes: state[action.qid][action.answer].votes.concat([action.authedUser]),
            text: state[action.qid][action.answer].text,            
          }
        }
        
      }
    default :
      return state
  }
}

