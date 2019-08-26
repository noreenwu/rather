import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {

  state = {
    questionIds: this.props.unansweredIds,
	questionSet: 'unanswered'    // by default display questions the user has not answered
  } 

  handleChange(val) {
	if (val === 'answered') {
      this.setState( {
          questionIds: this.props.answeredIds,
          questionSet : 'answered'
      })      
    } else if (val === 'unanswered') {
      this.setState( {
          questionIds: this.props.unansweredIds,
          questionSet: 'unanswered'
      })        
	}
  }


  render() {    

    if ( this.props.authedUser === '' ) {
      return (
           <Redirect to={{
                pathname: '/signin',
                state: { returnTo: '/' }
            }}
			/>
      )
    }
    return (
      <Fragment>
          <div className="center">
			  <div className="instructions">Welcome to <span className="bold">Would You Rather...?</span><br/> 
      				To play, respond to the polls shown
      			    or create your own by clicking New Question in the menu above.
      		  </div>
			  <div className="btn-container">
                  <button
                    className={`btn btn-half`}
                    type='button' 
                    value='unanswered'
                    onClick={ () => this.handleChange(event.target.value) }
                  >Unanswered</button>

                  <button
                    className={`btn btn-half`}
                    type='button'
                    value='answered'
                    onClick={(event) => this.handleChange(event.target.value)}
                  >Answered</button>
			  </div>
              <ul className='dashboard-list'>
                {this.state.questionIds.length === 0 && this.state.questionSet === 'unanswered'
                  ? <li key={`none`}> There are no questions to answer. What about creating some? </li>
                  : this.state.questionIds.map((id) => (
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

  const unanswered = qvals.filter(q => !q.optionOne.votes.includes(authedUser) &&
                                  	   !q.optionTwo.votes.includes(authedUser));
  
  const unansweredSorted = unanswered.sort((a,b) => b.timestamp - a.timestamp);
  const unansweredIds = unansweredSorted.map(q => q.id);
  
  //const answered = qvals.filter(q => unansweredIds.indexOf(q.id) === -1);
  const answered = qvals.filter(q => !unansweredIds.includes(q.id));
  
  const answeredSorted = answered.sort((a,b) => b.timestamp - a.timestamp);
  
  const answeredIds = answeredSorted.map(q => q.id);
  
  return {
    	unansweredIds: unansweredIds,
    	answeredIds: answeredIds,
        authedUser
    }
}

export default connect(mapStateToProps)(Dashboard)