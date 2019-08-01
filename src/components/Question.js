import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import FAvatar from '../../images/user-female-100.jpg';


class Question extends Component {
  render() {
    console.log("Question: ", this.props)
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }
    const {
      name, avatar, timestamp, optionA, optionB
    } = question    
    return(
      <div className="question">

      	  <div>
              <div className="question-info">{name} asks...</div>
			  <img alt={name} 
				   src={FAvatar}
				   className='avatar'
			  />
			   <span>{formatDate(timestamp)}</span>
		  </div>
		  <div className='question-text'>
              <span><h3>Would you rather...</h3><p>{optionA}</p><p>OR</p><p>{optionB}</p></span>
			  <button>View Poll</button>
			  <img src={avatar}
				   alt={`Avatar of ${name}`} 
				   className='avatar'/>             
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
        : null
        
  }
}

export default connect(mapStateToProps)(Question)