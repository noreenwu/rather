import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import Avatar from './Avatar'
import Option from './Option'
import BarResult from './BarResult'

class PollResults extends Component {
  render() {
    const { question, votesOne, votesTwo } = this.props
    
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
				  <BarResult votesFor={votesOne} votesTotal={votesOne + votesTwo}/>

				  <Option option={optionB}/>
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
  
  return {
    authedUser,
    question: question
    	? formatQuestion(question, users[question.author], authedUser)
        : null,
    votesOne: question.optionOne.votes.length,
    votesTwo: question.optionTwo.votes.length
   }
}


export default connect(mapStateToProps)(PollResults)
