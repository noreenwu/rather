import { RECEIVE_QUESTIONS, ADD_QUESTION, RECORD_VOTE } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      const { question } = action
      console.log("ADD_QUESTION: ", question);

      return {
        ...state,
        [action.question.id] : action.question
      
      }
      
    case RECORD_VOTE:
      const { authedUser, qid, answer } = action
      console.log("RECORD_VOTE reducer: ", authedUser, qid, answer);
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],  // if user voted for an option then add their id to the votes array
        	[action.optionOne] : state[action.qid].optionOne.votes.concat([action.authedUser])
            
        }
      }
    default :
      return state
  }
}

