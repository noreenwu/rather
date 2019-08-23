import { getInitialData } from '../utils/apis'
import { receiveUsers } from '../actions/users'
import { receiveQuestions, addQuestion, recordVote } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { saveQuestion, saveQuestionAnswer } from '../utils/apis.js'

//const AUTHED_ID = 'johndoe'
const AUTHED_ID = ''

export function handleInitialData () {
  return(dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {    
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))      
      })
  }
}


export function handleVote (authedUser, qid, answer) {
  const info = { authedUser, qid, answer }

  return (dispatch) => {  
    dispatch(recordVote(info))
    
    return saveQuestionAnswer({
         authedUser,
         qid,
         answer
      })
	 // .then(() => dispatch(hideLoading()))    
      .catch((e) => {
        console.warn('Error in handleVote: ', e)
      })
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {

  return (dispatch, getState) => {
    const { authedUser } = getState()   

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
     .then((question) => dispatch(addQuestion(question, authedUser)))
//     .then((question) => dispatch(addQuestionUser(question, authedUser)))
  
  }
}
