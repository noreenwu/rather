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
      name, avatar, optionA, optionB
    } = question    
    
    return(
       <div className="question-frame">
          <div className="title">Asked by {name}</div>
	      
      	  <h3>Poll Results</h3>
		  <div className="question">
              <div className="user-info">				    
					<img className="avatar" 
                         alt="avatar of {name}"
						 src={avatar}/>

              </div>
              <div className="question-info">
                  <p className="optionA">{optionA}</p>
                  <p className="optionB">{optionB}</p>
			  </div>
	      </div>
      
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
