import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {

  state = {
    questionIds: this.props.unansweredIds,
	questionSet: 'unanswered'    // by default display questions the user has not answered
  } 

  handleChange(val) {
	if (val === 'answered') {
      this.setState( {
          questionIds: this.props.answeredIds
      })      
    } else if (val === 'unanswered') {
      this.setState( {
          questionIds: this.props.unansweredIds
      })        
	}
  }
  
  render() {    
    
    return (
      <div className="center">
         <h3>Dashboard</h3>
    
       	  <button
      		type='button' 
      		value='unanswered'
		    onClick={ () => this.handleChange(event.target.value) }
      	  >Unanswered</button>
      
		  <button
      		type='button'
      		value='answered'
		    onClick={(event) => this.handleChange(event.target.value)}
      	  >Answered</button>
      
          <ul className='dashboard-list'>
            {this.state.questionIds.map((id) => (
              <li key={id}>
                <Question id={id}/>
              </li>
            ))}
          </ul>          
      </div>
    )
  }
}

function mapStateToProps( {questions, authedUser}) {
  
  const qvals = Object.values(questions);
  
  // TODO: change logic so we look for questions that the authed_user has not answered,
  // instead of questions that no one has answered  
  const unanswered = qvals.filter(q => !q.optionOne.votes.includes(authedUser) &&
                                  	   !q.optionTwo.votes.includes(authedUser));
  
  const unansweredIds = unanswered.map(q => q.id);
  
  const answered = qvals.filter(q => unansweredIds.indexOf(q.id) === -1);
  const answeredIds = answered.map(q => q.id);
  
  return {
    	unansweredIds: unansweredIds,
    	answeredIds: answeredIds
    }
}

export default connect(mapStateToProps)(Dashboard)