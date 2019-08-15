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
   				  <Option option={optionA}/>
				  <FlagUserResponse displayAnswer='optionOne' userAnswer={userAnswer}/>
				  <BarResult votesFor={votesOne} votesTotal={votesOne + votesTwo}/>

				  <Option option={optionB}/>
				  <FlagUserResponse displayAnswer='optionTwo' userAnswer={userAnswer}/>
				  <BarResult votesFor={votesTwo} votesTotal={votesOne + votesTwo}/>

			  </div>
	      </div>
      
       </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]
  //const votesOne = 0
  console.log("PollResults: user ", users[authedUser].answers[id]);
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
