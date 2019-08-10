import {saveQuestionAnswer, saveQuestion } from '../utils/apis.js'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECORD_VOTE = 'RECORD_VOTE'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function recordVote ({ authedUser, qid, answer }) {
  console.log("recordVote: ", authedUser, qid, answer);
  return {
    type: RECORD_VOTE,
    authedUser,    
    qid,
    answer
  }
}

export function handleVote (authedUser, qid, answer) {

  const info = { authedUser, qid, answer }
  console.log("actions/questions: handleVote: ", info);

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

function addQuestion(question) {
  console.log("actions/addQuestion ", question);
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {

  return (dispatch, getState) => {
    const { authedUser } = getState()   

    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
     .then((question) => dispatch(addQuestion(question)))
     .then(() => dispatch(hideLoading()))    
  }
}

