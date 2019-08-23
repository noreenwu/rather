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
          questionIds: this.props.answeredIds
      })      
    } else if (val === 'unanswered') {
      this.setState( {
          questionIds: this.props.unansweredIds
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
             <h3>Dashboard</h3>
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

  const unanswered = qvals.filter(q => !q.optionOne.votes.includes(authedUser) &&
                                  	   !q.optionTwo.votes.includes(authedUser));
  
  const unansweredSorted = unanswered.sort((a,b) => a.timestamp > b.timestamp ? -1 : 1 );
  
  const unansweredIds = unansweredSorted.map(q => q.id);
  
  const answered = qvals.filter(q => unansweredIds.indexOf(q.id) === -1);
  const answeredSorted = answered.sort((a,b) => a.timestamp > b.timestamp ? -1 : 1);
  
  const answeredIds = answeredSorted.map(q => q.id);
  
  return {
    	unansweredIds: unansweredIds,
    	answeredIds: answeredIds,
        authedUser
    }
}

//export default withRouter(connect(mapStateToProps)(Tweet))
export default connect(mapStateToProps)(Dashboard)