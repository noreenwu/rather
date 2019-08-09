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


function recordVote ({ id, authedUser, answer }) {
  return {
    type: RECORD_VOTE,
    qid : id,
    authedUser,
    answer
  }
}

function addQuestion(question) {
  console.log("actions/addQuestion ", question);
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOne, optionTwo) {
  console.log("handleAddQuestion ", optionOne, optionTwo);

  return (dispatch, getState) => {
    const { authedUser } = getState()   

    dispatch(showLoading())
    return saveQuestion({
      optionOne,
      optionTwo,
      author: authedUser,
    })
     .then((question) => dispatch(addQuestion(question)))
     .then(() => dispatch(hideLoading()))    
  }
}

export function handleVote (info) {
  return (dispatch) => {
    dispatch(recordVote(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleVote: ', e)
        dispatch(recordVote(info))
        alert('The was an error saving the vote. Try again.')
      })
  }
}