import React, { Component } from 'react'
import { connect } from 'react-redux'


class Dashboard extends Component {
  render() {
    // console.log("PROPS:" + this.props)
    return (
      <div>
         <h3>Dashboard</h3>
          <ul className='dashboard-list'>
            {this.props.questionIds.map((id) => (
              <li key={id}>
                <div>QUESTION ID: {id}</div>
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