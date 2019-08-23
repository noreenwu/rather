import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import Avatar from './Avatar'
import Option from './Option'
import BarResult from './BarResult'
import FlagUserResponse from './FlagUserResponse'

class PollResults extends Component {
  render() {
    const { question, votesOne, votesTwo, userAnswer } = this.props

    let optionOneHighlight, optionTwoHighlight = ''
    let optionOneHide, optionTwoHide = ''
    
    if (userAnswer === 'optionOne') {
      optionOneHighlight = 'highlight'
      optionTwoHide = 'user-vote-hide'
      optionOneHide = ''
    }
    else if (userAnswer === 'optionTwo') {
      optionTwoHighlight = 'highlight'
      optionOneHide = 'user-vote-hide'
      optionTwoHide = ''
    }
    
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }
    const {
      name, avatar, optionA, optionB
    } = question    


    return(
       <div className="question-frame">
          <div className="title">Asked by {name}</div>
	      
		  <div className="question">
              <div className="user-info">				    

                    <Avatar name={name} avatar={avatar}/>

              </div>
              <div className="question-info">
      	  		  <h3>Results</h3>
				  <div className={`option-result-block ${optionOneHighlight}`}>
                      <FlagUserResponse optionHide={optionOneHide}/>
                      <Option option={optionA}/>
					  <BarResult votesFor={votesOne} votesTotal={votesOne + votesTwo}/>
				  </div>
				  <div className={`option-result-block ${optionTwoHighlight}`}>
                      <FlagUserResponse optionHide={optionTwoHide}/>
                      <Option option={optionB}/>
					  <BarResult votesFor={votesTwo} votesTotal={votesOne + votesTwo}/>
				  </div>

			  </div>
	      </div>
      
       </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]
  const userAnswer = users[authedUser].answers[id];
  
  return {
    authedUser,
    question: question
    	? formatQuestion(question, users[question.author], authedUser)
        : null,
    votesOne: question.optionOne.votes.length,
    votesTwo: question.optionTwo.votes.length,
    userAnswer
   }
}


export default connect(mapStateToProps)(PollResults)
