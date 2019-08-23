export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECORD_VOTE = 'RECORD_VOTE'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function recordVote ({ authedUser, qid, answer }) {
  return {
    type: RECORD_VOTE,
    authedUser,    
    qid,
    answer
  }
}


export function addQuestion(question, authedUser) {
  //console.log("actions/addQuestion ", question, authedUser);
  //console.log("actions/addQuestion: do we know the question id? ", question.id);
  const qid = question.id
  return {
    type: ADD_QUESTION,
    question,
    authedUser,
    qid
  }
}
