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
  return { 
    //questionIds: Object.keys(questions)
    questionIds: Object.keys(questions),
  }
}

export default connect(mapStateToProps)(Dashboard)