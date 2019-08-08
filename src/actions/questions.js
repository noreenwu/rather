import {_saveQuestionAnswer } from '../utils/_DATA.js'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECORD_VOTE = 'RECORD_VOTE'


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

export function handleVote (info) {
  return (dispatch) => {
    dispatch(recordVote(info))

    return _saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleVote: ', e)
        dispatch(recordVote(info))
        alert('The was an error saving the vote. Try again.')
      })
  }
}