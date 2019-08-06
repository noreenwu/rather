import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { Link , withRouter } from 'react-router-dom'

class Question extends Component {
  render() {
    console.log("Question: ", this.props)
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }
    const {
      name, avatar, timestamp, optionA, optionB, id
    } = question    
    
    return(
      <div className="question-frame">
		  <div className="title">{name} asks</div>
      	  <div className="question">
			  <div className="user-info">
                  <img src={avatar}
                       alt={`Avatar of ${name}`} 
                       className='avatar'/>     
                   <div className="timestamp">{formatDate(timestamp)}</div>
			   </div>
		  
              <div className='question-info'>
                  <div className="option">{optionA}</div>
                    <p>OR</p>
                  <div className="option">{optionB}</div>


                  <Link to={`/poll/${id}`}>                        
                      <button className='poll-button'>View Poll</button>
                  </Link>             
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
    // isAnswered: users[authedUser].questions.includes(id)? true : false
  }
}

//export default connect(mapStateToProps)(Question)
export default withRouter(connect(mapStateToProps)(Question))
