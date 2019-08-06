import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import Avatar from './Avatar'
import Option from './Option'

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

                    <Avatar name={name} avatar={avatar}/>

              </div>
              <div className="question-info">
   				  <Option option={optionA}/>
				  <Option option={optionB}/>
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
