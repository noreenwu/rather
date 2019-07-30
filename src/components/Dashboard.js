import React, { Component } from 'react'
import { connect } from 'react-redux'


class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
         Dashboard
      </div>
    )
  }
}

function mapStateToProps( state ) {
  const { questions } = state
  console.log(state)
  return { 
    //questionIds: Object.keys(questions)
    questionIds: Object.keys(questions),
    otherthing: 'hello'
  }
}

export default connect(mapStateToProps)(Dashboard)