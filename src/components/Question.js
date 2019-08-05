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
      <div className="question">
		  
      	  <div>
              <div className="question-info">{name} asks...</div>

			  <img src={avatar}
				   alt={`Avatar of ${name}`} 
				   className='avatar'/>     
			   <span>{formatDate(timestamp)}</span>
		  </div>
		  <div className='question-text'>
              <span><h3>Would you rather...</h3><p>{optionA}</p><p>OR</p><p>{optionB}</p></span>

  			  <Link to={`/poll/${id}`} 
				    className='question'>
				  <button>View Poll</button>
 			  </Link>
        
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
