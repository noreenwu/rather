import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


//import {  formatDate } from '../utils/helpers'


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
      <Fragment>
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
	  </Fragment>
    )
  }
}

function mapStateToProps( {questions, authedUser}) {
  
  const qvals = Object.values(questions);
  console.log("DASHBOARD qval timestamp: ", qvals[0].timestamp);
  const unanswered = qvals.filter(q => !q.optionOne.votes.includes(authedUser) &&
                                  	   !q.optionTwo.votes.includes(authedUser));
  
  const unansweredSorted = unanswered.sort((a,b) => a.timestamp > b.timestamp ? -1 : 1 );
  //console.log("DASHBOARD: unansweredSorted ", unansweredSorted);
  
  const unansweredIds = unansweredSorted.map(q => q.id);
  
  const answered = qvals.filter(q => unansweredIds.indexOf(q.id) === -1);
  const answeredSorted = answered.sort((a,b) => a.timestamp > b.timestamp ? -1 : 1);
  
  const answeredIds = answeredSorted.map(q => q.id);
  
  return {
    	unansweredIds: unansweredIds,
    	answeredIds: answeredIds
    }
}

export default connect(mapStateToProps)(Dashboard)