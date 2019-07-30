import React, { Component } from 'react';
import '../css/App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }  
  render() {
    return (
      <div>
		<Dashboard/>
      </div>
    );
  }
}


export default connect()(App)
//export default connect(mapStateToProps)(App)
