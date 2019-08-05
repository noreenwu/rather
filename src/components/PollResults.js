import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class PollResults extends Component {
  render() {
    return(
       <div>
      	  Poll Results
       </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]
                          
  return {
    authedUser,
    question: question
    	? formatQuestion(question, users[question.author], authedUser)
        : null,                  
   }
}


export default connect(mapStateToProps)(PollResults)
