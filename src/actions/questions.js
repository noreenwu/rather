import {saveQuestionAnswer, saveQuestion} from '../utils/apis.js'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECORD_VOTE = 'RECORD_VOTE'
export const ADD_QUESTION = 'ADD_QUESTION'
//export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function recordVote ({ authedUser, qid, answer }) {
  return {
    type: RECORD_VOTE,
    authedUser,    
    qid,
    answer
  }
}

export function handleVote (authedUser, qid, answer) {
  const info = { authedUser, qid, answer }

  return (dispatch) => {
    dispatch(showLoading())   
    dispatch(recordVote(info))
    
    return saveQuestionAnswer({
         authedUser,
         qid,
         answer
      })
	  .then(() => dispatch(hideLoading()))    
      .catch((e) => {
        console.warn('Error in handleVote: ', e)
      })
  }
}


export function addQuestion(question, authedUser) {
  console.log("actions/addQuestion ", question, authedUser);
  console.log("actions/addQuestion: do we know the question id? ", question.id);
  const qid = question.id
  return {
    type: ADD_QUESTION,
    question,
    authedUser,
    qid
  }
}

//function addQuestionUser(question, authedUser) {
//  console.log("actions/addQuestionUSER", question);
//  console.log("actions/addQuestionUSER", authedUser);
//  return {
//    type: ADD_QUESTION_USER,
//    qid: question.id,
//    authedUser
//  }
//  
//}

export function handleAddQuestionOrig(optionOneText, optionTwoText) {

  return (dispatch, getState) => {
    const { authedUser } = getState()   

    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
     .then((question) => dispatch(addQuestion(question, authedUser)))
//     .then((question) => dispatch(addQuestionUser(question, authedUser)))
     .then(() => dispatch(hideLoading()))    
  }
}
