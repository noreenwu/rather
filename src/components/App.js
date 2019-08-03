import React, { Component, Fragment } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }  
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/new' component={NewQuestion} />
				  <Route path='/leaderboard' component={LeaderBoard} />
                </div>}
          </div>
        </Fragment>
      </Router>      
   
    )
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

//export default connect()(App)
export default connect(mapStateToProps)(App)
