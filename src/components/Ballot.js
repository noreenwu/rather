import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import Avatar from './Avatar'

class Ballot extends Component {
  render() {
    const { question } = this.props
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }    
    
    const {
      name, avatar, optionA, optionB
    } = question  
    

    return (
       <div className="question-frame"> 
      	  <div className="title">
		      {name} asks...
          </div>
		  <div className="question">
              <div className="user-info">
                 <Avatar avatar={avatar} name={name}/>
              </div>
 		      <div className="question-info">
{optionA} or {optionB}
<button>Submit</button>
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

export default connect(mapStateToProps)(Ballot)
