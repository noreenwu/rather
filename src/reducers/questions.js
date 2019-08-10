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
        [action.qid] : {
          ...state[action.qid],
          [action.answer] : {
            ...state[action.answer],
            text: state[action.qid].optionOne.text,
            votes: state[action.qid].optionOne.votes.concat([action.authedUser])
          }
        }
		// pass in the actual question that needs to be updated 
        
      }
    default :
      return state
  }
}

