import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserOption extends Component {  
   render() {
     const {id} = this.props
     return(
     	<option  value={id}>{id}</option>	
     )
   }
  
}


function mapStateToProps( {users, authedUser}, {id} ) {
  return {
    id
  }
}

export default connect(mapStateToProps)(UserOption)