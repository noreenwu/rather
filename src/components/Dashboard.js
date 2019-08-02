import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {

    return (
      <div className="center">
         <h3>Dashboard</h3>
          <ul className='dashboard-list'>
            {this.props.questionIds.map((id) => (
              <li key={id}>
                <Question id={id}/>
              </li>
            ))}
          </ul>          
      </div>
    )
  }
}

function mapStateToProps( {questions} ) {
  
  const qvals = Object.values(questions);
  const answered = qvals.filter(q => q.optionOne.votes.length + q.optionTwo.votes.length === 0);
  const answeredIds = answered.map(q => q.id);
  
  return { 
    questionIds: answeredIds,
  }
}

export default connect(mapStateToProps)(Dashboard)