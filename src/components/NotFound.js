import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotFound extends Component {
  render() {
    console.log("Not Found: ", this.props);
    return (
       <div className="center">
          <h3>404</h3> 
          <div>
              The page you specified could not be found. {this.props.authedUser}
          </div>
       </div>
    )
  }
}

function mapStateToProps( {authedUser} ) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NotFound)