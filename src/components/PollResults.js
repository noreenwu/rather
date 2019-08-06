import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class PollResults extends Component {
  render() {
    const { question } = this.props
    
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }
    const {
      name, avatar, timestamp, optionA, optionB, id
    } = question    
    
    return(
       <div>
          <span>Asked by {name} at {timestamp} avatar: {avatar} id: {id}</span>
	      
      	  <h3>Poll Results</h3>
      	  <p className="optionA">{optionA}</p>
		  <p className="optionB">{optionB}</p>
	  
      
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
