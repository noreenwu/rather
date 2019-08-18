import React, { Component, Fragment } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import SignIn from './SignIn'
import Nav from './Nav'
import Poll from './Poll'
import NotFound from './NotFound'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }  
  render() {
    return (
      
      <Router>
        <Fragment>
          <div className='container'>
            
            {this.props.loading === true
              ? <LoadingBar/>
              : <Fragment>
		        <Nav name={this.props.name}/>
      
      			<div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/add' component={NewQuestion} />
				  <Route path='/leaderboard' component={LeaderBoard} />
				  <Route path='/poll/:id' component={Poll} />
				  <Route path='/signin' component={SignIn} />
				  <Route path='/notfound' component={NotFound} />


                </div>
          		</Fragment>
		}
          </div>

        </Fragment>	  

      </Router>        
    )
  }
}


function mapStateToProps ({ authedUser, users }) {
  const userInfo = users[authedUser];
  let name = '';
  for(const key in userInfo) {
    if (key === 'name') {
      name = userInfo[key];
    }
  }
  
  return {
    name,
    authedUser,
    loading: authedUser === null
  }
}

//export default connect()(App)
export default connect(mapStateToProps)(App)
