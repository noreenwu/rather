import { getInitialData } from '../utils/apis'
import { receiveUsers } from '../actions/users'
import { receiveQuestions, addQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { saveQuestion} from '../utils/apis.js'
//import { showLoading, hideLoading } from 'react-redux-loading'

//const AUTHED_ID = 'johndoe'
const AUTHED_ID = 'sarahedo'

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
