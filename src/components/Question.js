import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
  render() {
    console.log("Question: ", this.props)
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }
    const {
      name, avatarURL, timestamp
    } = question    
    return(
      <div className="Question">
	      <h3>Question</h3>
      	  <p>{name} has avatar {avatarURL} at timestamp {timestamp}</p>
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
        : null
        
  }
}

export default connect(mapStateToProps)(Question)